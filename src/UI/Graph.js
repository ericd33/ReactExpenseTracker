import './Graph.css';
import React from "react";
import GraphBar from './GraphBar';


function Graph(props) {
    console.log(props.chartData);
     return(
         <div className="graph__wrapper">
             {props.chartData.map(function (data) {
                 return <GraphBar value={data.val} label={data.month} key={data.month}/>
             })}
         </div>
     );
}

export default Graph;