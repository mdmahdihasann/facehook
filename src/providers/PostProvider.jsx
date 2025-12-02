import React, { useReducer } from 'react'
import { PostContext } from '../contexts'
import { initialState, PostsReducres } from '../reducers/PostsReducres'

const PostProvider = ({children}) => {
    const [state, dispatch] = useReducer(PostsReducres, initialState)
  return (
    <PostContext.Provider value={{state, dispatch}}>
        {children}
    </PostContext.Provider>
  )
}

export default PostProvider