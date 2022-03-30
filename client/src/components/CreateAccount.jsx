import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const CreateAccount = ({ setIsLoggedIn, BASE_URL }) => {

  let navigate = useNavigate()

  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('') 

  const saveName = (e) => {
    setName(e.target.value)
  }

  const saveAge = (e) => {
    setAge(e.target.value)
  }

  const saveUsername = (e) => {
    setUsername(e.target.value)
  }

  const savePassword = (e) => {
    setPassword(e.target.value)
  }

  const saveLocation = (e) => {
    setLocation(e.target.value)
  }

  const createPerson = async (e) => {
    e.preventDefault()
    const existingUser = await axios
      .get(`${BASE_URL}/checkPerson/${username}`)
      .catch(function (error) {
        console.log(error)
      })
    if (existingUser === { username: username }) {
      alert('A user with that username already exists, please try a different one!')
    } else {
      const data = {
        name: name,
        age: age,
        username: username,
        password: password,
        location: location
      }
      let person 
      const savePerson = async () => {
        await axios.post(`${BASE_URL}/person`, data).then(function (response) {
          person = (response.data.person)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
      await savePerson()
      await setIsLoggedIn(true)
      navigate(`/profile/${person._id}`)
    }
  }

  return (
    <div>
      <h3>Create an Account</h3>
      <form onSubmit={createPerson}>
        <h5>Name</h5>
        <input type='text' placeholder="Name" value={name} onChange={saveName}/>
        <h5>Age</h5>
        <input type='number' placeholder="Age" value={age} onChange={saveAge}/>
        <h5>Username</h5>
        <input type='text' placeholder="Username" value={username} onChange={saveUsername}/>
        <h5>Password</h5>
        <input type='text' placeholder="Password" value={password} onChange={savePassword}/>
        <h5>Location</h5>
        <select id="location" type='text' placeholder="Location" value={location} onChange={saveLocation}>
          <option value=""></option>
          <option value="New York City, NY">New York City, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
          <option value="Houston, TX">Houston, TX</option>
          <option value="Phoenix, AZ">Phoenix, AZ</option>
        </select>
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount