import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner__wrap">
      <FontAwesomeIcon icon={faBookOpen} className="fa-2x banner__logo" />

      <h1>Expense tracker</h1>

      <FontAwesomeIcon icon={faBookOpen} className="fa-2x banner__logo" />
    </div>
  );
}

export default Banner;
