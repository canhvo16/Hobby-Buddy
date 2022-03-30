const Login = ({ checkCredentials, personPassword, personUsername, usernameCredential, passwordCredential }) => {
  return (
    <div className="loginBox">
      <h3>Login Info</h3>
      <form className="login" onSubmit={checkCredentials}>
        <h5>Username</h5>
        <input
          type="text"
          placeholder="Enter Username"
          value={personUsername}
          onChange={usernameCredential}
          required
        />
        <h5>Password</h5>
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