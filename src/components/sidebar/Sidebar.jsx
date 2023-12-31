import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/346665448_7109406475741457_1875682355796312926_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=tKF-X0RITe8AX-yR4C0&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBYGxBMCCBceQRraN6OHKYA012kbiHQSMUM-eK2NmzNaw&oe=65806952"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          atque perferendis sint nemo maxime unde placeat animi quaerat sed
          itaque?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
