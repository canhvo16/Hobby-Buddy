const CreatePost = ({ createPost, text, saveText, photo, savePhoto }) => {

  return (
  <div className="postContainer">
    <h2>Create A Post</h2>
    <form onSubmit={createPost} className='postBox'>
      <textarea type='text' placeholder="What's on you're mind..." value={text} onChange={saveText} cols='100' rows='5' required/>
      <input type="text" placeholder="Photo URL" value={photo} onChange={savePhoto} />
      <button>Post</button>
    </form>
  </div>
  )
}

export default CreatePost