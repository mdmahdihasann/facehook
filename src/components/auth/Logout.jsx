import { useNavigate } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

const Logout = () => {
  const { setAuth } = useAuth();
  const Navigate = useNavigate();
  const handleClick = () => {
    setAuth({});
    Navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleClick}>
      <img src={logout} alt="Logout" />
    </button>
  );
};

export default Logout;
