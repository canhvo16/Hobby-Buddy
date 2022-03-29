import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Info from '../components/Info'
import Friends from '../components/Friends'

const ProfilePage = ({ BASE_URL }) => {
  const [user, setUser] = useState({})

  let { id } = useParams()

  useEffect(() => {
    const getPerson = async () => {
      let person = await axios.get(`${BASE_URL}/person/${id}`)
      setUser(person.data)
    }
    getPerson()
  }, [])

  const deleteAccount = async () => {
    if (
      window.confirm(
        'This will permanently delete your account, are you sure this is what you want to do?'
      )
    ) {
      console.log('Pressed yes')
    } else {
      console.log('Pressed no')
    }
  }

  return (
    <div>
      <img src={user.photo} id="profilePhoto" />
      <h3>{user.name}</h3>
      <Info user={user} id={id} BASE_URL={BASE_URL} setUser={setUser} />
      <Friends user={user} />
      <button onClick={deleteAccount}>Delete Account</button>
    </div>
  )
}

export default ProfilePage
