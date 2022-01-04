import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/user/new">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt=""
              className="userImage"
            ></img>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+9 123 456</span>
            </div>
            <div className="userShowInfo">
              <MailOutlineIcon className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearchingIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Myanmar</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="annaback99"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Birthday</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="10.12.1999"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="+9 123 456"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="annabeck99@gmail.com"
                ></input>
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Myanmar"
                ></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                  alt=""
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>

                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button type="submit" className="userUpdateButton">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
