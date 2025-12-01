import { useProfile } from "../../hooks/useProfile";
import PostsList from "../posts/PostsList";

const MyPosts = () => {
  const { state } = useProfile();
  const posts = state?.posts;
  return <PostsList posts={posts} />;
};

export default MyPosts;
