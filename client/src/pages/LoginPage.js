import CreateAccount from '../components/CreateAccount'
import Login from '../components/Login'

const LoginPage = (props) => {
  return (
    <div className="loginContainer">
      <Login
        checkCredentials={props.checkCredentials}
        personPassword={props.personPassword}
        personUsername={props.personUsername}
        usernameCredential={props.usernameCredential}
        passwordCredential={props.passwordCredential}
      />
      <CreateAccount
        setIsLoggedIn={props.setIsLoggedIn}
        BASE_URL={props.BASE_URL}
        isLoggedIn={props.isLoggedIn}
        createPerson={props.createPerson}
        name={props.name}
        saveName={props.saveName}
        age={props.age}
        saveAge={props.saveAge}
        username={props.username}
        saveUsername={props.saveUsername}
        password={props.password}
        savePassword={props.savePassword}
        location={props.location}
        saveLocation={props.saveLocation}
      />
    </div>
  )
}

export default LoginPage
