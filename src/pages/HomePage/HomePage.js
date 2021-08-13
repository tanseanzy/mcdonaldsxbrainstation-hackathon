import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

// icon/image imports
import menu from "../../assets/images/menu.png";
import whatsnew from "../../assets/images/whatsnew.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <img className="main__menuimg" src={menu} alt="Menu" />
        <div className="main__votecontainer">
          <p className="main__votecontainer-title">
            What combo will win promo of the day?
          </p>
          <p className="main__votecontainer-votetime">Voting ends in 3 hours</p>
          <Link to="/vote">
            <button className="main__votecontainer-button">VOTE NOW</button>
          </Link>
        </div>
        <img className="main__whatsnew" src={whatsnew} alt="What's New?" />
      </div>
    );
  }
}
