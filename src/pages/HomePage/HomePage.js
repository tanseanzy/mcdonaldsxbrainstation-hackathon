import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./HomePage.scss";

// icon/image imports
import menu from "../../assets/images/menu.png";
import whatsnew from "../../assets/images/whatsnew.png";

export default class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <img className="main__menuimg" src={menu} alt="Menu Image" />
        <div className="main__votecontainer">
          <p className="main__votecontainer-title">
            Who will win today's meal of the day?
          </p>
          <button className="main__votecontainer-button">VOTE NOW</button>
        </div>
        <img className="main__whatsnew" src={whatsnew} alt="What's New?" />
      </div>
    );
  }
}
