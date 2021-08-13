import React, { Component } from "react";
import "./POPage.scss"

import PersonalOffer from "../../assets/images/personaloffer.png"
import otheroffer from "../../assets/images/otheroffer.png"

export default class OfferPage extends Component {
    render() {
       return  (
          <div className="offer">
              <div className="offer__top">
                <h1 className="offer__title">Personal offers</h1>
                <img className="offer__top--img" src={PersonalOffer} alt="No personal offers! check back later." />
              </div>
              <div className="offer__other">
                  <h1 className="offer__title">Other offers</h1> 
                  <img className="offer__other--img" src={otheroffer} alt="other coupons" />
              </div>
          </div> 
       )
    }
}