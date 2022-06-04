import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner__wrap">
      <div>
        <FontAwesomeIcon icon={faCoffee} className="fa-5x banner__logo" />
      </div>
      <div> 
        <h1>Expense tracker</h1>
      </div>
    </div>
  );
}

export default Banner;
