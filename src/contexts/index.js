import { createContext } from "react";

const AuthContext = createContext();
const ProfileContext = createContext(null);
const PostContext = createContext();

export { AuthContext, ProfileContext, PostContext};
