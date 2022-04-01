import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

const Info = ({ user, BASE_URL, setUser }) => {

  const [showEditor, setShowEditor] = useState(false)
  const [newName, setNewName] = useState(user.name)
  const [newPhoto, setNewPhoto] = useState(user.photo)
  const [newAge, setNewAge] = useState(user.age)
  const [newLocation, setNewLocation] = useState(user.location)
  const [newHobbies, setNewHobbies] = useState(user.hobbies)
  const [newInterests, setNewInterests] = useState(user.interests)
  const [newUsername, setNewUsername] = useState(user.username)
  const [newPassword, setNewPassword] = useState(user.password)

  let { id } = useParams()

  const toggleEditor = () => {
    setShowEditor(!showEditor)
  }

  const updateName = (e) => {
    setNewName(e.target.value)
  }

  const updatePhoto = (e) => {
    setNewPhoto(e.target.value)
  }

  const updateAge = (e) => {
    setNewAge(e.target.value)
  }

  const updateLocation = (e) => {
    setNewLocation(e.target.value)
  }

  const updateHobbies = (e) => {
    setNewHobbies(e.target.value)
  }

  const updateInterests = (e) => {
    setNewInterests(e.target.value)
  }

  const updateUsername = (e) => {
    setNewUsername(e.target.value)
  }

  const updatePassword = (e) => {
    setNewPassword(e.target.value)
  }

  const updatePersonInfo = async (e) => {
    e.preventDefault()
    let data = {
      name: newName,
      username: newUsername,
      password: newPassword,
      photo: newPhoto,
      age: newAge,
      location: newLocation,
      hobbies: newHobbies,
      interests: newInterests
    }
    const updatePerson = async () => {
      await axios.put(`/api/person/${id}`, data).then(function (response) {
        setUser(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    updatePerson()
    setShowEditor(!showEditor)
  }

  let editBox = showEditor ? (<div className="editorBox">
  <form onSubmit={updatePersonInfo} className='form'>
    <h5>Name</h5>
    <input type='text' placeholder="Name" value={newName} onChange={updateName}/>
    <h5>Photo URL</h5>
    <input type='text' placeholder="Photo URL" value={newPhoto} onChange={updatePhoto} />
    <h5>Hobbies</h5>
    <input type='text' placeholder="Hobbies" value={newHobbies} onChange={updateHobbies}/>
    <h5>Interests</h5>
    <input type='text' placeholder="Interests" value={newInterests} onChange={updateInterests}/>
    <h5>Age</h5>
    <input type='number' placeholder="Age" value={newAge} onChange={updateAge}/>
    <h5>Username</h5>
    <input type='text' placeholder="Username" value={newUsername} onChange={updateUsername}/>
    <h5>Password</h5>
    <input type='text' placeholder="Password" value={newPassword} onChange={updatePassword}/>
    <h5>Location</h5>
    <select id="location" type='text' placeholder="Location" value={newLocation} onChange={updateLocation}>
      <option value=""></option>
      <option value="New York City, NY">New York City, NY</option>
      <option value="Los Angeles, CA">Los Angeles, CA</option>
      <option value="Chicago, IL">Chicago, IL</option>
      <option value="Houston, TX">Houston, TX</option>
      <option value="Phoenix, AZ">Phoenix, AZ</option>
    </select>
    <button className="saveButton">Save Changes</button>
  </form>
</div>) : null

  return (
  <div>
    <div className="infoBox">
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