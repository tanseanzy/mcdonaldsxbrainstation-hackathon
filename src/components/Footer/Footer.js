import "./Footer.scss";
import { Link } from "react-router-dom";

import homeicon from "../../assets/icons/home-footer.png";
import ordericon from "../../assets/icons/order-footer.png";
import offersicon from "../../assets/icons/offers-footer.png";
import recentsicon from "../../assets/icons/recents-footer.png";
import moreicon from "../../assets/icons/more-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer__icon" src={homeicon} alt="Home Icon" />
      </Link>
      <img className="footer__icon" src={ordericon} alt="Order Icon" />
      <Link to="/offers">
        <img className="footer__icon" src={offersicon} alt="Offers Icon" />
      </Link>
      <img className="footer__icon" src={recentsicon} alt="Recents" />
      <img className="footer__icon" src={moreicon} alt="More Icon" />
    </footer>
  );
}
