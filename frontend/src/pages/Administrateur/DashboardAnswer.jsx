// import Headeradmin from "../../components/Header/HeaderAdmin";
// import FilterBar from "../../components/AdminPage/FilterBar";
// // import Sidebar from "../components/Sidebar";
// import FooterAdmin from "../../components/Footer/FooterUser";
// import Answer from "../../components/AdminPage/Answer";
// import "../../styles/Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-wrapper">
//       <Headeradmin />
//       {/* <Sidebar /> */}
//       <FilterBar />
//       <Answer />
//       <FooterAdmin />
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState } from "react";
import HeaderAdmin from "../../components/AdminPage/HeaderAdmin";
import Sidebar from "../../components/AdminPage/SideBar";
// import Answer from "../../components/AdminPage/Answer";
// import MainDashboard from "../../components/AdminPage/MainDashboard";
import "../../components/AdminPage/AdminPage.css";
import ListAnswer from "../../components/AdminPage/ListAnswer";

function DashboardAnswer() {
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
      <ListAnswer />
    </div>
  );
}

export default DashboardAnswer;
