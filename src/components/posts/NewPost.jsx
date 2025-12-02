import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import PostEntry from "./PostEntry";
import EmptyImage from "../../assets/images/avatars/Empty.png"
const NewPost = () => {
  const { auth } = useAuth();
  const [showPostEntry, setShowPostEntry] = useState(false);
  return (
    <>
      {showPostEntry ? (
        <PostEntry />
      ) : (
        <div className="card">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            <div><img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px] w-[60px] h-[60px]"
              src={auth?.user?.avatar ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }` : EmptyImage}
              alt="avatar"
            /></div>

            <div className="flex justify-end">
              <button onClick={() => setShowPostEntry(true)} className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm">AddPost</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPost;
