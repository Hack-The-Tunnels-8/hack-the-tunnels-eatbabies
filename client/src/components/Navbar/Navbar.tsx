import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";
import logo from "./EATbabies.png";


function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/"><img src={logo} className="logo" alt="Logo"  /></Link>
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? (
          <>
            <button onClick={() => navigate("/sign-up")} 
              style={{
                backgroundColor: "#F67280",
                borderRadius: 1,
                padding:2,
              }} className = "button">Sign Up</button>
            <button onClick={() => navigate("/login")} 
              style={{
                backgroundColor: "#F67280",
                borderRadius: 1,
                padding:2,
              }}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}
          style={{
            backgroundColor: "#F67280",
            borderRadius: 1,
          }}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
