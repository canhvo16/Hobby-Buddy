import CreateAccount from '../components/CreateAccount'
import Login from '../components/Login'

const LoginPage = ({
  setIsLoggedIn,
  BASE_URL,
  isLoggedIn,
  checkCredentials,
  personPassword,
  personUsername,
  usernameCredential,
  passwordCredential
}) => {
  return (
    <div>
      <Login
        checkCredentials={checkCredentials}
        personPassword={personPassword}
        personUsername={personUsername}
        usernameCredential={usernameCredential}
        passwordCredential={passwordCredential}
      />
      <CreateAccount
        setIsLoggedIn={setIsLoggedIn}
        BASE_URL={BASE_URL}
        isLoggedIn={isLoggedIn}
      />
    </div>
  )
}

export default LoginPage
