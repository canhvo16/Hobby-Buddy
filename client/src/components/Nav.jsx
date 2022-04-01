import { Link } from 'react-router-dom'

const Nav = ({ logout}) => {

  return (
    <header className='header'>
      <h1 className='title'>Hobby Buddy</h1>
      <nav className='nav'>
        <Link to='/' onClick={logout}>Logout</Link>
      </nav>
    </header>
  )
}

export default Nav