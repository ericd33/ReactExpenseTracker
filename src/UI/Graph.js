import "./Graph.css";
import React from "react";
import GraphBar from "./GraphBar";
import Card from "./Card";

function Graph(props) {
  const MONTH_ARR = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div>
      {
        <div className="stats__wrapper">
            
              <div className="litte__stats">
                <div className="stat__mini">
                  <p>Income</p>
                  <p className="income">+{props.income()}</p>
                </div>
                <div className="stat__mini">
                  <p>Total</p>
                  <p className="total">{props.total()}</p>
                </div>
                <div className="stat__mini">
                  <p>Outcome</p>
                  <p className="outcome">{props.outcome()}</p>
                </div>
                
              </div>
            
        </div>
      }
      <div className="graph__wrapper">
        {MONTH_ARR.map(function (ele, index) {
          return <GraphBar fill={props.fill[index]} label={MONTH_ARR[index]} />;
        })}
      </div>
    </div>
  );
}

export default Graph;
