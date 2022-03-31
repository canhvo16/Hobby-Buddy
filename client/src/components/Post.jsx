const Post = ({ post, user }) => {

  return (
    <div>
      <h3>{user.name}</h3>
      {/* <img src={myPostDetails.photo} alt='postImage' /> */}
      <p>{post.text}</p>
    </div>
  )
}

export default Post