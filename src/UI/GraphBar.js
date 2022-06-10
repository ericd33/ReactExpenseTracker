import React from "react";
import "./GraphBar.css";

function GraphBar(props) {

  return (
    <div className="graph__bar">
      <div className="graph__bar__inner">
        <div className="graph__bar__fill" style={{ height: (props.fill + '%') }}></div>
        </div>
        <div className="graph__bar__label">{props.label}</div>
    </div>
  );
}

export default GraphBar;
