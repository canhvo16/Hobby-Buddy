const Login = ({ checkCredentials, personPassword, personUsername, usernameCredential, passwordCredential }) => {
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
    </div>
  )
}

export default Login