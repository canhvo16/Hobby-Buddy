import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <h1>Hobby Buddy</h1>
      <nav className='nav'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/search'>Search</Link>
      </nav>
    </header>
  )
}

export default Nav