import "./Header.scss";
import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import mobileIcons from "../../assets/icons/mobileutil.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <p className="header__top-time">9:41</p>
        <img
          className="header__top-mobileicons"
          src={mobileIcons}
          alt="Mobile Utility Icons"
        />
      </div>
      <div className="header__bottom">
        <Link to="/">
          <img className="header__bottom-logo" src={logo} alt="Logo" />
        </Link>
      </div>
    </header>
  );
}
