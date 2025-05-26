function ProfilePost({ post }) {
  return (
    <div className="profile-post">
      <img src={post.image} alt={post.title} />
    </div>
  );
}

export default ProfilePost;