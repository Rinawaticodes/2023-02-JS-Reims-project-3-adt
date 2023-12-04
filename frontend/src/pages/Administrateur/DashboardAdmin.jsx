import React, { useState } from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../../components/AdminPage/HeaderAdmin";
import Sidebar from "../../components/AdminPage/SideBar";
import MainDashboard from "../../components/AdminPage/MainDashboard";
import "../../components/AdminPage/AdminPage.css";

function DashboardAdmin({ user }) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <HeaderAdmin OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <MainDashboard user={user} />
    </div>
  );
}

DashboardAdmin.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DashboardAdmin;
