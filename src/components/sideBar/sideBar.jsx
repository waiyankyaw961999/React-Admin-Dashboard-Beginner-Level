import "./sideBar.css";
import { Link } from "react-router-dom";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyleIcon />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <GroupIcon />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <StoreIcon />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoneyIcon />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartIcon />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon />
              Mails
            </li>
            <li className="sidebarListItem">
              <DynamicFeedIcon />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutlineIcon />
              Manage
            </li>
            <li className="sidebarListItem">
              <LineStyleIcon />
              Analytics
            </li>
            <li className="sidebarListItem">
              <ReportIcon />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
