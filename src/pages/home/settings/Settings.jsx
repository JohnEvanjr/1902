import Sidebar from "../../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://i0.wp.com/treasureearthprize.org/wp-content/uploads/2018/12/pretty-ocean-wallpaper-475-541-hd-wallpapers.jpg?ssl=1" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="John Evan" />
          <label>Email</label>
          <input type="email" placeholder="johnevanjr1902@gmail.com" />
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Udate</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
