const Post = ({ post, user }) => {

  let photo = (post.photo) ? <img src={post.photo} alt='postImage' /> : null 

  return (
    <div className="post">
      <h3>{user.name}</h3>
      {photo}
      <p>{post.text}</p>
    </div>
  )
}

export default Post