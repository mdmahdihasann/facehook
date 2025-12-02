import React, { useRef } from "react";
import { useProfile } from "../../hooks/useProfile";
import { useAxios } from "../../hooks/useAxios";
import edit from "../../assets/icons/edit.svg";
import { actions } from "../../actions";
import EmptyImage from "../../assets/images/avatars/Empty.png"

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileInputRef = useRef();

  const handleInputFile = (e) => {
    e.preventDefault();
    fileInputRef.current.addEventListener("change", fileUploadHandler);
    fileInputRef.current.click();
  };
  const fileUploadHandler = async () => {
    try {
      const formData = new FormData();
      for (const file of fileInputRef.current.files) {
        formData.append("avatar", file);
      }      
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state.user?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-[212px] max-h-[200px] rounded-full"
        src={state.user?.avatar ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state.user?.avatar}` : EmptyImage}
        alt={state.user?.name}
      />

      <form>
        <button
          type="submit"
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
        >
          <img src={edit} alt="Edit" onClick={handleInputFile} />
        </button>

        <input hidden type="file" name="avatar" ref={fileInputRef} />
      </form>
    </div>
  );
};

export default ProfileImage;
