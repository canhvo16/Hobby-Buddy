import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './style/App.css'

const App = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let nav = isLoggedIn ? (
    <Nav setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <Link to="/about">About</Link>
  )

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
    if (personDetails.password === personPassword) {
      setIsLoggedIn(true)
      navigate(`/profile/${personDetails._id}`)
    } else {
      alert(
        "The username and password you provided do not match! Please remember usernames and passwords are case sensitive and try again! If you're still having trouble, please contact Canh (details in About Page) for assitance, thank you!"
      )
    }
  }

  return (
    <div className="App">
      {nav}
      <main>
        <Routes>
          <Route
            index
            element={
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
                BASE_URL={BASE_URL}
                isLoggedIn={isLoggedIn}
                personUsername={personUsername}
                personPassword={personPassword}
                usernameCredential={usernameCredential}
                passwordCredential={passwordCredential}
                checkCredentials={checkCredentials}
              />
            }
          />
          <Route
            path="/profile/:id"
            element={<ProfilePage BASE_URL={BASE_URL} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
