import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './style/App.css'

const App = () => {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
