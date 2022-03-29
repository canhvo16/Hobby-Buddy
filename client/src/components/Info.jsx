import { useState } from "react"

const Info = ({ user }) => {

  const [showEditor, setShowEditor] = useState(false)

  const toggleEditor = () => {
    setShowEditor(!showEditor)
  }

  let editBox = showEditor ? (<div className="editorBox">
  <form >
    <h5>Name</h5>
    <input type='text' placeholder="Name" />
    <h5>Age</h5>
    <input type='number' placeholder="Age" />
    <h5>Username</h5>
    <input type='text' placeholder="Username" />
    <h5>Password</h5>
    <input type='text' placeholder="Password" />
    <h5>Location</h5>
    <select id="location" type='text' placeholder="Location">
      <option value=""></option>
      <option value="New York City, NY">New York City, NY</option>
      <option value="Los Angeles, CA">Los Angeles, CA</option>
      <option value="Chicago, IL">Chicago, IL</option>
      <option value="Houston, TX">Houston, TX</option>
      <option value="Phoenix, AZ">Phoenix, AZ</option>
    </select>
    <button>Save Changes</button>
  </form>
</div>) : null

  return (
  <div>
    <div className="infoBox">
      <h4>Info</h4>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Hobbies:</strong> {user.hobbies}</p>
      <p><strong>Interests:</strong> {user.interests}</p>
      <p><strong>Groups:</strong> {user.groups}</p>
      <button onClick={toggleEditor}>Edit</button>
    </div>
    {editBox}
  </div>
  )
}

export default Info