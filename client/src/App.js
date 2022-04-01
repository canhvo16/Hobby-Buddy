import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './style/App.css'

const App = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // CreateAccount useStates
  ////////////////////////////////////////////////////////////
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')
  const [showPasswordCreated, setShowPasswordCreated] = useState(false)
  // LoginPage useStates
  ////////////////////////////////////////////////////////////
  const [personUsername, setPersonUsername] = useState('')
  const [personPassword, setPersonPassword] = useState('')
  const [showLoginPassword, setShowLoginPassword] = useState(false)

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('loggedIn')
  }

  let nav = isLoggedIn ? (
    <Nav logout={logout} />
  ) : (
    <div className="header">
      <h1 className="title">Hobby Buddy</h1>
      <div className="links nav">
        <Link to="/">Login Page</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )

  let navigate = useNavigate()

  // LoginPage functions
  ////////////////////////////////////////////////////////////
  const usernameCredential = (e) => {
    setPersonUsername(e.target.value)
  }

  const passwordCredential = (e) => {
    setPersonPassword(e.target.value)
  }

  const checkCredentials = async (e) => {
    e.preventDefault()
    const person = await axios
      .get(`${BASE_URL}/verifyPerson/${personUsername}`)
      .catch(function (error) {
        console.log(error)
      })
    let personDetails = person.data[0]
    if (personDetails.password === personPassword) {
      setIsLoggedIn(true)
      localStorage.setItem('loggedIn', { isLoggedIn })
      navigate(`/profile/${personDetails._id}`)
    } else {
      alert(
        "The username and password you provided do not match! Please remember usernames and passwords are case sensitive and try again! If you're still having trouble, please contact Canh (details in About Page) for assitance, thank you!"
      )
    }
  }

  const toggleLoginPassword = () => {
    setShowLoginPassword(!showLoginPassword)
  }

  // CreateAccount functions
  ////////////////////////////////////////////////////////////
  const togglePasswordCreated = () => {
    setShowPasswordCreated(!showPasswordCreated)
  }

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
    if (existingUser.data === 'Username available!') {
      const data = {
        name: name,
        age: age,
        username: username,
        password: password,
        location: location
      }
      let person
      const savePerson = async () => {
        await axios
          .post(`${BASE_URL}/person`, data)
          .then(function (response) {
            person = response.data.person
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      await savePerson()
      setIsLoggedIn(true)
      localStorage.setItem('loggedIn', { isLoggedIn })
      navigate(`/profile/${person._id}`)
    } else {
      alert(existingUser.data)
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
                createPerson={createPerson}
                name={name}
                saveName={saveName}
                age={age}
                saveAge={saveAge}
                username={username}
                saveUsername={saveUsername}
                password={password}
                savePassword={savePassword}
                location={location}
                saveLocation={saveLocation}
                showLoginPassword={showLoginPassword}
                toggleLoginPassword={toggleLoginPassword}
                showPasswordCreated={showPasswordCreated}
                togglePasswordCreated={togglePasswordCreated}
              />
            }
          />
          <Route
            path="/profile/:id"
            element={
              <ProfilePage BASE_URL={BASE_URL} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
