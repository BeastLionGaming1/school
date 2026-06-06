import { Link } from "react-router-dom";
import Icon from "../Icon.jsx";
import searchIcon from "../../assets/search.svg";
import notificationIcon from "../../assets/notification.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="input-container">
          <img src={searchIcon} />
          <input type="text" placeholder="Search students, notes, communities..." />
        </div>
        <Link to="/about" className="notificationContainer">
          <img src={notificationIcon} className="notif" />
        </Link>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7jiUOlWSageJnEq9TEBRTcRF5tOL7Dhn5DBRdLVD5g&s=10" className="profilePic" />
      </header>
    </>
  )
}

export default Header;