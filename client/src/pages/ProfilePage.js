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
      console.log(person.data)
    }
    getPerson()
  }, [])

  return (
    <div>
      <img src={user.photo} id="profilePhoto" />
      <h3>{user.name}</h3>
      <Info user={user} />
      <Friends user={user} />
    </div>
  )
}

export default ProfilePage
