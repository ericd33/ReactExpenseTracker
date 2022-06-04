import "./Controls.css";
import React from "react";

function Controls(props) {

  function handleButtonClick(event) {
    event.preventDefault();
    props.onHideForm();
  }

  return (
    <div className="controls__wrap">
      <button onClick={handleButtonClick}>Add an Item</button>
    </div>
  );
}

export default Controls;
