import React, { useState } from "react";
import PostsCommentList from "./PostsCommentList";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import EmptyImage from "../../assets/images/avatars/Empty.png"

const PostsComment = ({ post }) => {
  const { auth } = useAuth();
  const {state} = useProfile();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const [showComments, setShowComments] = useState(false);
  const { api } = useAxios();

  const authUser = auth?.user.id ?? state?.author?.id

  const addComment = async (e) => {
    const keyCode = e.keyCode;

    if (keyCode === 13) {
      try {
        const response = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/comment`,
          { comment }
        );
        if (response.status === 200) {
          setComments([...response.data.comments]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  function handleCommentIsShow() {
    setShowComments(!showComments);
  }
  return (
    <div>
      {/* <!-- comment input box --> */}
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={auth?.user?.avatar ? `${import.meta.env.VITE_SERVER_BASE_URL}/${authUser?.user?.avatar}`: EmptyImage}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            placeholder="What's on your mind?"
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => addComment(e)}
          />
        </div>
      </div>
      {/* comment filter button */}
      <div className="mt-4">
        <button
          onClick={handleCommentIsShow}
          className="text-gray-300 max-md:text-sm"
        >
          All Comment ▾
        </button>
      </div>

      {/* <!-- comments --> */}
      {showComments && <PostsCommentList comments={comments} />}
    </div>
  );
};

export default PostsComment;
