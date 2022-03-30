import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateAccount from '../components/CreateAccount'

const LoginPage = ({ setIsLoggedIn, BASE_URL, isLoggedIn }) => {
  let navigate = useNavigate()

  const [personUsername, setPersonUsername] = useState('')
  const [personPassword, setPersonPassword] = useState('')

  const usernameCredential = (e) => {
    setPersonUsername(e.target.value)
  }

  const passwordCredential = (e) => {
    setPersonPassword(e.target.value)
  }

  const checkCredentials = async (e) => {
    e.preventDefault()
    const person = await axios
      .get(`${BASE_URL}/checkPerson/${personUsername}`)
      .catch(function (error) {
        console.log(error)
      })
    let personDetails = person.data
    console.log(personDetails)
  }

  return (
    <div>
      <h1 className="title">Hobby Buddy</h1>
      <form className="login" onSubmit={checkCredentials}>
        <h3>Username</h3>
        <input
          type="text"
          placeholder="Enter Username"
          value={personUsername}
          onChange={usernameCredential}
          required
        />
        <h3>Password</h3>
        <input
          type="text"
          placeholder="Enter Password"
          value={personPassword}
          onChange={passwordCredential}
          required
        />
        <button>Login</button>
      </form>
      <CreateAccount
        setIsLoggedIn={setIsLoggedIn}
        BASE_URL={BASE_URL}
        isLoggedIn={isLoggedIn}
      />
    </div>
  )
}

export default LoginPage
