import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./VotingPage.scss";

export default class VotingPage extends Component {
  render() {
    return (
      <div className="votecontainer">
        <div className="votecontainer__qp">
          <div>
            <p className="votecontainer__title">Quarter Pounder with Cheese</p>
            <h1 className="votecontainer__letter">A</h1>
            <Link to="/voteconfirmed">
              <button className="votecontainer__button1">VOTE A</button>
            </Link>
          </div>
        </div>
        <div className="votecontainer__blt">
          <div>
            <p>Egg BLT McMuffin</p>
            <h1 className="votecontainer__letter">B</h1>
            <Link to="/voteconfirmed">
              <button className="votecontainer__button2">VOTE B</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
