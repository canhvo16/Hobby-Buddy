const CreatePost = ({ createPost, text, saveText, photo, savePhoto }) => {

  return (
  <div>
    <form onSubmit={createPost}>
      <textarea type='text' placeholder="What's on you're mind..." value={text} onChange={saveText} cols='40' rows='5' required/>
      <input type="text" placeholder="Photo URL" value={photo} onChange={savePhoto} />
      <button>Post</button>
    </form>
  </div>
  )
}

export default CreatePost