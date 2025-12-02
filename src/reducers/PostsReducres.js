import { actions } from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const PostsReducres = (state, action) => {
  switch (action.type) {
    case actions.posts.DATA_FETCHING:
      return {
        ...state,
        loading: true,
      };

    case actions.posts.DATA_FETCHED:
      return {
        ...state,
        loading: false,
        posts: action.data,
      };
    case actions.posts.DATA_CREATE:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.data],
      };
    case actions.posts.DATA_DELETE:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post)=> post.id !== action.data),
      };
    case actions.posts.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
        return state
  }
};

export { initialState, PostsReducres}