import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => navigate("/")}>
          Booking
        </span>
        {user ? (
          `Welcome back, ${user.username}!`
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
