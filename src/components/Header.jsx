import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let btnName = "Login";
  let onlineStatus = useOnlineStatus();
  const [btnLogin, setBtnLogin] = useState(true);

  return (
    <div className="Header">
      <div className="Logo container">
        <img className="logo" src={LOGO_URL} alt="food Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnLogin(!btnLogin);
              console.log(btnName);
            }}
          >
            {btnLogin ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
