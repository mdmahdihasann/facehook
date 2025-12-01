import { useEffect, useReducer } from "react";
import PostsList from "../components/posts/PostsList";
import { useAxios } from "../hooks/useAxios";
import { initialState, PostsReducres } from "../reducers/PostsReducres";
import { actions } from "../actions";

const HomePage = () => {
  const { api } = useAxios();
  const [state, dispatch] = useReducer(PostsReducres, initialState);

  useEffect(() => {
    dispatch({ type: actions.posts.DATA_FETCHING });
    const featchData = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
        );

        if (response.status === 200) {
          console.log("data");
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
  console.log(state);
  if (state?.loading) return <div>We are working...</div>;
  if (state?.error) return <div>Error in fatching posts {state?.error}</div>;
  return (
    <div>
      <PostsList posts={state?.posts} />
    </div>
  );
};

export default HomePage;
