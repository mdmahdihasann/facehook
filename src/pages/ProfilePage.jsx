import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const { api } = useAxios();
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response.data?.user);
        setPosts(response.data?.posts);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);
  if (loading) return <h2>Featch Profile data...</h2>;
  return (
    <>
      <h3>{user?.firstName}</h3>
    </>
  );
};

export default ProfilePage;
