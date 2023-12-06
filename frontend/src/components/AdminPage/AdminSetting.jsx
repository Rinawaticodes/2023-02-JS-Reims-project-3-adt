import React, { useState } from "react";
import Sidebar from "./SideBar";
import HeaderAdmin from "./HeaderAdmin";

function AdminSetting() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div>
      <div className="grid-container">
        <HeaderAdmin OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <h3>List d'Administrateur</h3>
      </div>
    </div>
  );
}

export default AdminSetting;
