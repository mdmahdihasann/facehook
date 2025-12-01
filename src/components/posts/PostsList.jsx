import PostsCard from "./PostsCard";

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <>
          <PostsCard key={post.id} post={post} />
        </>
      ))}
    </>
  );
};

export default PostsList;
