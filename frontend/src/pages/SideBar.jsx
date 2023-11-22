import React from "react";

import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill } from "react-icons/bs";

import "./AdminPage.css";

// eslint-disable-next-line react/prop-types
function Sidebar({ openSidebarToggle }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        {/* 
        <button type="button" className="icon close_icon" onClick={OpenSidebar}>
          X
        </button> */}
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <BsGrid1X2Fill className="icon" /> Dashboard
        </li>

        <li className="sidebar-list-item">
          <BsFillArchiveFill className="icon" /> Products
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
