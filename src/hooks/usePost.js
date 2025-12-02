import { useContext } from "react"
import { PostContext } from "../contexts"

export const UsePost = () => {
    return useContext(PostContext)
}