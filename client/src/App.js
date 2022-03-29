import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import './style/App.css'

const App = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  let nav = isLoggedIn ? <Nav /> : <Link to="/about">About</Link>

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
              />
            }
          />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
