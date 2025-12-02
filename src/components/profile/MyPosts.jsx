import { useProfile } from "../../hooks/useProfile";
import PostsList from "../posts/PostsList";

const MyPosts = () => {
  const { state } = useProfile();
  const posts = state?.posts?.sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt)
  );

  return <PostsList posts={posts} />;
};

export default MyPosts;
