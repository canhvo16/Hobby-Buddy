import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Info from '../components/Info'
import Friends from '../components/Friends'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'

const ProfilePage = ({ BASE_URL, setIsLoggedIn }) => {
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()
  let loggedIn = localStorage.getItem('loggedIn')

  const getPost = async () => {
    const myPost = await axios.get(`${BASE_URL}/getUserPosts/${id}`)
    setPosts(myPost.data)
  }

  useEffect(() => {
    const getPerson = async () => {
      let person = await axios.get(`${BASE_URL}/person/${id}`)
      setUser(person.data)
      setIsLoggedIn(loggedIn)
    }
    getPerson()
    getPost()
  }, [])

  const deleteAccount = async () => {
    if (
      window.confirm(
        'This will permanently delete your account, are you sure this is what you want to do?'
      )
    ) {
      if (
        window.confirm(
          'Please reconsider, I need users..., are you sure you want to delete your acount?'
        )
      ) {
        await axios.delete(`${BASE_URL}/person/${id}`)
        setIsLoggedIn(false)
        navigate('/')
      } else {
        console.log('Pressed no')
      }
    } else {
      console.log('Pressed no')
    }
  }

  // CreatePost functions
  //////////////////////////////////////////////////////
  const [text, setText] = useState('')
  const [photo, setPhoto] = useState('')

  const saveText = (e) => {
    setText(e.target.value)
  }

  const savePhoto = (e) => {
    setPhoto(e.target.value)
  }

  const createPost = (e) => {
    let data
    if (photo === '') {
      data = {
        name: id,
        text: text
      }
    } else {
      data = {
        name: id,
        photo: photo,
        text: text
      }
    }
    const savePost = async () => {
      await axios.post(`${BASE_URL}/post`, data).catch(function (error) {
        console.log(error)
      })
    }
    savePost()
    setText('')
    setPhoto('')
  }
  //////////////////////////////////////////////////////

  // Post functions
  //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////

  return (
    <div className="profile">
      <div className="info">
        <img className="profilePhoto" src={user.photo} alt="profilePhoto" />
        <h1 className="name">{user.name}</h1>
        <hr className="infoHr" />
        <Info user={user} id={id} BASE_URL={BASE_URL} setUser={setUser} />
        <hr className="infoHr" />
        <Friends user={user} />
        <hr className="infoHr" />
        <button onClick={deleteAccount} className="deleteButton">
          Delete Account
        </button>
      </div>
      <div className="postTimeline">
        <CreatePost
          createPost={createPost}
          text={text}
          saveText={saveText}
          photo={photo}
          savePhoto={savePhoto}
        />
        <hr className="postHr" />
        <div>
          <h2 className="login">Posts</h2>
          {posts?.map((post) => (
            <Post post={post} user={user} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
