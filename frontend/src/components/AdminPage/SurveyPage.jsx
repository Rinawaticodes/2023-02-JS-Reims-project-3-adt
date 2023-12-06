import React, { useState } from "react";
import Sidebar from "./SideBar";
import HeaderAdmin from "./HeaderAdmin";

function SurveyPage() {
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
      <h1>Formulaire</h1>
    </div>
  );
}

export default SurveyPage;
