import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/icons/home.svg";
import notification from "../../assets/icons/notification.svg";
import Logout from "../auth/Logout";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import EmptyImage from "../../assets/images/avatars/Empty.png"

const Header = () => {
  const {auth} = useAuth();
  const {state} = useProfile();
  
  const user = state?.user ?? auth?.user;
  return (
    <main class="mx-auto">
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
          <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link to="/">
              <img
                className="max-w-[100px] rounded-full lg:max-w-[130px]"
                src={Logo}
              />
            </Link>

            <div className="flex items-center space-x-4">
              <Link to="/" className="btn-primary">
                <img src={Home} alt="Home" />
                Home
              </Link>
              <button className="icon-btn">
                <img src={notification} alt="Notification" />
              </button>
              <Logout />

              <Link to="/em" className="flex-center !ml-8 gap-3">
                <span className="text-lg font-medium lg:text-xl">{user?.firstName} {user?.lastName}</span>
                <img
                  className="max-h-[32px] max-w-[60px] lg:max-h-[40px] lg:max-w-[40px] rounded-full"
                  src={user?.avatar ? `${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}` : EmptyImage}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </nav>
    </main>
  );
};

export default Header;
