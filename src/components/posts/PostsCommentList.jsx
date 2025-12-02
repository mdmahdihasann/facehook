import EmptyImage from "../../assets/images/avatars/Empty.png"

const PostsCommentList = ({ comments }) => {
  return (
    <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
      {/* <!-- single comment --> */}
      {comments &&
        comments.map((comment) => (
          <div className="flex items-center gap-3 pt-4" key={comment.id}>
            <img
              class="max-w-6 max-h-6 rounded-full"
              src={comment?.author?.avatar ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                comment?.author?.avatar
              }`:EmptyImage}
              alt="avatar"
            />
            <div>
              <div className="flex gap-1 text-xs lg:text-sm">
                <span>{comment?.author?.name}: </span>
                <span>{comment?.comment}</span>
              </div>
            </div>
          </div>
        ))}

      {/* <!-- single comment ends --> */}
    </div>
  );
};

export default PostsCommentList;
