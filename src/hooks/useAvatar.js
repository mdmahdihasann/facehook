import { useProfile } from "../hooks/useProfile";
export const useAvater = (post) => {
  const { state } = useProfile();
  const isMe = (post?.author?.id === state?.user?.id);
  const avatar = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`;
  const avatarUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;
  return {avatarUrl};
};
