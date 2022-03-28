import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import './style/App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let nav = isLoggedIn ? <Nav /> : <Link to="/about">About</Link>

  return (
    <div className="App">
      {nav}
      <main>
        <Routes>
          <Route index element={<LoginPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
