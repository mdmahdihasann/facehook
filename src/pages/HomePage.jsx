import { useEffect } from "react";
import PostsList from "../components/posts/PostsList";
import { useAxios } from "../hooks/useAxios";
import { actions } from "../actions";
import NewPost from "../components/posts/NewPost";
import { UsePost } from "../hooks/usePost";

const HomePage = () => {
  const { api } = useAxios();
  const {state, dispatch} = UsePost();
  const posts = state?.posts?.sort((a, b)=> new Date(b.createAt) - new Date(a.createAt))

  useEffect(() => {
    dispatch({ type: actions.posts.DATA_FETCHING });
    const featchData = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          dispatch({ type: actions.posts.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({
          type: actions.posts.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    featchData();
  }, []);
  if (state?.loading) return <div>We are working...</div>;
  if (state?.error) return <div>Error in fatching posts {state?.error}</div>;
  return (
    <div>
      <NewPost/>
      <PostsList posts={posts} />
    </div>
  );
};

export default HomePage;
