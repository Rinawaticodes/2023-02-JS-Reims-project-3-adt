import { Link } from "react-router-dom";
import logo from "../assets/ADT-Logo-Vert.jpeg";
import "../styles/Navbar.css";

function NavbarUser() {
  return (
    <div className="containerNavbarUser">
      <div className="logoAdt">
        <Link to="/">
          <img src={logo} alt="logo adt marne" />
        </Link>
      </div>
    </div>
  );
}

export default NavbarUser;
