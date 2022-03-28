const LoginPage = () => {
  return (
    <div>
      <h1 className="title">Hobby Buddy</h1>
      <form className="login">
        <h3>Username</h3>
        <input type="text" placeholder="Enter Username" required />
        <h3>Password</h3>
        <input type="text" placeholder="Enter Password" required />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
