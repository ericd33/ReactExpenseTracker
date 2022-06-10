import './Graph.css';
import React from "react";
import GraphBar from './GraphBar';


function Graph(props) {

    const MONTH_ARR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


     return(
         <div className="graph__wrapper">
             {MONTH_ARR.map(function (ele, index) {
                 return <GraphBar fill={props.fill[index]} label={MONTH_ARR[index]}/>
             })}
         </div>
     );
}

export default Graph;