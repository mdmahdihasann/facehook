import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";
import SolidLike from "../../assets/icons/solidLike.svg";
import { useAxios } from "../../hooks/useAxios";
import { useAuth } from "../../hooks/useAuth";

const PostsAction = ({ post }) => {
  const { api } = useAxios();
  const { auth } = useAuth();
  const [likes, setLikes] = useState(post?.likes.includes(auth?.user?.id));

  const handleLike = async () => {    
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/like`
      );
      
      if (response.status === 200) {
        setLikes(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* <!-- Like Button --> */}
      <button
        onClick={handleLike}
        class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img src={!likes ? LikeIcon : SolidLike} alt="Like" />
        <span>Like</span>
      </button>

      {/* <!-- Comment Button --> */}
      <button class="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({post?.comments?.length})</span>
      </button>
      {/* <!-- Share Button --> */}

      {/* <!-- Like Button --> */}
      <button class="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostsAction;
