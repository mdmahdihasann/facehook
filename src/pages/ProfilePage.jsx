import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { actions } from "../actions";
import ProfileImage from "../components/profile/ProfileImage";
import ProfileInfo from "../components/profile/ProfileInfo";
import Bio from "../components/profile/Bio";
import { useProfile } from "../hooks/useProfile";
import MyPosts from "../components/profile/MyPosts";

const ProfilePage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) return <h2>Fetching Profile data...</h2>;

  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImage />
        <ProfileInfo />
        <Bio />
      </div>
      <div>
        <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl ">Your Posts</h4>
        <MyPosts/>
      </div>
    </>
  );
};

export default ProfilePage;
