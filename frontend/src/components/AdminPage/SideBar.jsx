import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  // BsCart3,
  BsGrid1X2Fill,
  BsPeopleFill,
  BsFillGearFill,
  BsArrowRightCircleFill,
  BsFillFilterSquareFill,
} from "react-icons/bs";
import logo from "../../assets/ADT-Logo-Vert.jpeg";
import "./AdminPage.css";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logo} alt="logo" />
        </div>
        {openSidebarToggle && (
          <button
            type="button"
            className="icon close_icon"
            onClick={OpenSidebar}
          >
            X
          </button>
        )}
        {/* <span>X</span> */}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Tableau de bord
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/form" target="_blank" rel="noopener noreferrer">
            <BsPeopleFill className="icon" /> Formulaire
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/dashboard/admin" target="_blank" rel="noopener noreferrer">
            <BsFillGearFill className="icon" /> Administrateur
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/legal" target="_blank" rel="noopener noreferrer">
            <BsFillFilterSquareFill className="icon" /> Mention Légale
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/login">
            <BsArrowRightCircleFill className="icon" /> Se deconnecter
          </Link>
        </li>
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
  openSidebarToggle: PropTypes.bool.isRequired,
};

export default Sidebar;
