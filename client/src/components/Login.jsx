const Login = ({ checkCredentials, personPassword, personUsername, usernameCredential, passwordCredential, showLoginPassword, toggleLoginPassword }) => {
  return (
    <div className="loginBox">
      <h2 className="loginTitle">Login Info</h2>
      <hr/>
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
          type={showLoginPassword ? 'text' : 'password'}
          placeholder="Enter Password"
          value={personPassword}
          onChange={passwordCredential}
          required
        />
        <button className="loginButton">Login</button>
      </form>
      <button onClick={toggleLoginPassword}>Show Password</button>
    </div>
  )
}

export default Login