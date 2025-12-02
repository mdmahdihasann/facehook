import Field from "../common/Field";
import AddPhoto from "../../assets/icons/addPhoto.svg";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import { useForm } from "react-hook-form";
import { useAxios } from "../../hooks/useAxios";
import { UsePost } from "../../hooks/usePost";
import { actions } from "../../actions";
import { useRef } from "react";

const PostEntry = () => {
  const { auth } = useAuth();
  const { state: profile } = useProfile();
  const { api } = useAxios();
  const { dispatch } = UsePost();
  const inputRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = profile?.user ?? auth?.user;

  const handleCratePost = async (data) => {
    const fromData = new FormData();
    fromData.append("content", data.content);
    if (data.image && data.image.length > 0) {
      fromData.append("image", data.image[0]);
    }

    dispatch({ type: actions.posts.DATA_FETCHING });
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        fromData
      );

      if (response.status === 200) {
        dispatch({ type: actions.posts.DATA_CREATE, data: response.data });
      }
    } catch (error) {
      console.log(error);

      dispatch({ type: actions.posts.DATA_FETCH_ERROR, error: error.message });
    }
  };

  const handleImageInput = () => {
    console.log(inputRef.current.files);
  };

  return (
    <div className="card relative">
      <h6 className="mb-3 text-center text-lg font-bold lg:text-xl">
        Create Post
      </h6>

      <form onSubmit={handleSubmit(handleCratePost)}>
        <div className="mb-3 flex items-center justify-between gap-2 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}
              </h6>

              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <Field htmlFor="image">
            <>
              <label
                className="btn-primary cursor-pointer !text-gray-100"
                for="image"
              >
                <img
                  src={AddPhoto}
                  alt="Add Photo"
                  onClick={handleImageInput}
                />
                Add Photo
              </label>
              <input
                ref={inputRef}
                {...register("image", { required: "This field is Required" })}
                type="file"
                name="image"
                id="image"
                className="hidden"
              />
            </>
          </Field>
        </div>
        <Field error={errors.message}>
          <textarea
            {...register("content", { required: "This field is Required" })}
            name="content"
            id="content"
            placeholder="Share your thoughts..."
            className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
          ></textarea>
        </Field>

        <Field>
          <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
            <button
              className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
              type="submit"
            >
              Post
            </button>
          </div>
        </Field>
      </form>
    </div>
  );
};

export default PostEntry;
