import { useProfile } from "../../hooks/useProfile";
import edit from "../../assets/icons/edit.svg";
import check from "../../assets/icons/close.svg";
import { useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { actions } from "../../actions";

const Bio = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState(state.user?.bio);

  const handleEditBio = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const responase = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );
      console.log(responase);

      if (responase.status === 200) {
        dispatch({ type: actions.profile.USER_DATA_EDIT, data: responase.data });
        setEditMode(false);
      }
    } catch (error) {
      dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: error });
    }
  };

  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {editMode ? (
            <textarea
              value={bio}
              rows="5"
              cols="30"
              className="w-full resize-none rounded-lg border border-gray-600 bg-transparent p-2 text-white lg:text-lg"
              onChange={(e) => setBio(e.target.value)}
            />
          ) : (
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {state.user?.bio}
            </p>
          )}
        </div>
        {editMode ? (
          <button
            className="flex-center h-7 w-7 rounded-full"
            onClick={handleEditBio}
          >
            <img src={check} alt="save" />
          </button>
        ) : (
          <button
            className="flex-center h-7 w-7 rounded-full"
            onClick={() => setEditMode(true)}
          >
            <img src={edit} alt="Edit" />
          </button>
        )}
      </div>
      <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
    </>
  );
};

export default Bio;
