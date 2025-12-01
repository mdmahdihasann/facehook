import { useContext } from "react";
import { ProfileContext } from "../contexts";

export const useProfile = () => {
  const context = useContext(ProfileContext);
  return context; 
};
