const CreateAccount = ({ createPerson, name, saveName, age, saveAge, username, saveUsername, password, savePassword, location, saveLocation, showPasswordCreated, togglePasswordCreated }) => {

  return (
    <div className="createAccountBox">
      <h3>Create an Account</h3>
      <form onSubmit={createPerson}>
        <h5>Name</h5>
        <input type='text' placeholder="Name" value={name} onChange={saveName} required/>
        <h5>Age</h5>
        <input type='number' placeholder="Age" value={age} onChange={saveAge} required/>
        <h5>Username</h5>
        <input type='text' placeholder="Username" value={username} onChange={saveUsername} required/>
          <h5>Password</h5>
          <input type={showPasswordCreated ? 'text' : 'password'} placeholder="Password" value={password} onChange={savePassword} required/>
          <button onClick={togglePasswordCreated}>Show Password</button>
        <h5>Location</h5>
        <select id="location" type='text' placeholder="Location" value={location} onChange={saveLocation} required>
          <option value=""></option>
          <option value="New York City, NY">New York City, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
          <option value="Houston, TX">Houston, TX</option>
          <option value="Phoenix, AZ">Phoenix, AZ</option>
        </select>
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccount