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
    let reqBody = { username: personUsername }
    const person = await axios
      .get(`${BASE_URL}/checkPerson/${personUsername}`)
      .then(console.log(reqBody))
      .catch(function (error) {
        console.log(error)
      })
    console.log(person.username)
    // if (person) {
    //   await setIsLoggedIn(true)
    //   navigate(`/profile/${person._id}`)
    // } else {
    //   alert(
    //     'The username and password you gave do not match. Usernames and passwords are case sensitive. Please try again!'
    //   )
    // }
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
