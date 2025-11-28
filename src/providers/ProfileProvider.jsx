import React, { useReducer } from 'react'
import { ProfileContext } from '../contexts'
import { ProfileReducers, initialState } from '../reducers/profileReducers'

const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProfileReducers, initialState)
  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
        {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider