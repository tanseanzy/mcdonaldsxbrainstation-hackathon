import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./VoteConfirmed.scss";

// icon/image imports
import bar1 from "../../assets/images/bar1.png";
import bar2 from "../../assets/images/bar2.png";
import checkmark from "../../assets/icons/checkmark.png";

export default class VoteConfirmed extends Component {
  render() {
    return (
      <div className="confirmed">
        <div className="confirmed__top">
          <h2 className="confirmed__title">Vote confirmed!</h2>
          <p className="confirmed__subtitle">Here are the current results:</p>
        </div>
        <img className="confirmed__checkmark" src={checkmark} alt="Checkmark" />
        <div className="confirmed__mid">
          <div className="confirmed__mid-flex">
            <img className="confirmed__bar" src={bar1} alt="Bar 1" />
            <p className="confirmed__text">Quarter Pounder with Cheese</p>
          </div>
          <div className="confirmed__mid-flex">
            <img className="confirmed__bar" src={bar2} alt="Bar 2" />
            <p className="confirmed__text">BLT McMuffin</p>
          </div>
        </div>
        <div div className="confirmed__bot">
          <button className="confirmed__button1">Keep Me Updated</button>
          <Link to="/offers">
            <button className="confirmed__button2">View Offers</button>
          </Link>
        </div>
      </div>
    );
  }
}
