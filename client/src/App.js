import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import './style/App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let nav = isLoggedIn ? <Nav /> : null

  return (
    <div className="App">
      {nav}
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
