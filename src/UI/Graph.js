import './Graph.css';
import React from "react";
import GraphBar from './GraphBar';
import Card from './Card'

function Graph(props) {

    const MONTH_ARR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];


     return(
        <div>
            {/* <div className="stats__wrapper">
            <div className="statsCard"><Card hideThis={true}><h1>Holaaaa</h1></Card></div>  
            <div className="statsCard"><Card hideThis={true}><h1>Holaaaa</h1></Card></div>
            </div> */}
         <div className="graph__wrapper">
             {MONTH_ARR.map(function (ele, index) {
                 return <GraphBar fill={props.fill[index]} label={MONTH_ARR[index]}/>
             })}
         </div>
         </div>
     );
}

export default Graph;