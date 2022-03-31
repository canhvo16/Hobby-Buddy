import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Info from '../components/Info'
import Friends from '../components/Friends'
import CreatePost from '../components/CreatePost'
import Post from '../components/Post'

const ProfilePage = ({ BASE_URL }) => {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])

  let { id } = useParams()
  let navigate = useNavigate()

  const getPost = async () => {
    const myPost = await axios.get(`${BASE_URL}/getUserPosts/${id}`)
    console.log(myPost)
    setPosts(myPost.data)
  }

  useEffect(() => {
    const getPerson = async () => {
      let person = await axios.get(`${BASE_URL}/person/${id}`)
      setUser(person.data)
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
      await axios.delete(`${BASE_URL}/person/${id}`)
      navigate('/')
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
    e.preventDefault()
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
    <div>
      <img src={user.photo} alt="profilePhoto" />
      <h3>{user.name}</h3>
      <Info user={user} id={id} BASE_URL={BASE_URL} setUser={setUser} />
      <Friends user={user} />
      <CreatePost
        createPost={createPost}
        text={text}
        saveText={saveText}
        photo={photo}
        savePhoto={savePhoto}
      />
      {posts?.map((post) => (
        <Post post={post} user={user} key={post._id} />
      ))}
      <button onClick={deleteAccount}>Delete Account</button>
    </div>
  )
}

export default ProfilePage
