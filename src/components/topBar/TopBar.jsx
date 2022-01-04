import React from "react";
import "./topbar.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon className="" />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <LanguageIcon className="" />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconContainer">
            <SettingsIcon className="" />
          </div>
          <img
            alt="Avatar"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            className="topAvatar"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
