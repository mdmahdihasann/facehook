import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Home from "../../assets/icons/home.svg";
import notification from "../../assets/icons/notification.svg";
import Logout from "../auth/Logout";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const {auth} = useAuth();
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
                <span className="text-lg font-medium lg:text-xl">{auth?.user?.firstName} {auth?.user?.lastName}</span>
                <img
                  className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`}
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
