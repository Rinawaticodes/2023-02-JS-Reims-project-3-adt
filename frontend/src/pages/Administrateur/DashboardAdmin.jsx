import React, { useState } from "react";
import HeaderAdmin from "../../components/AdminPage/HeaderAdmin";
import Sidebar from "../../components/AdminPage/SideBar";
import MainDashboard from "../../components/AdminPage/MainDashboard";
import "../../components/AdminPage/AdminPage.css";

function DashboardAdmin() {
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
      <MainDashboard />
    </div>
  );
}
export default DashboardAdmin;
