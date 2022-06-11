import "./DropDown.css"
import React from "react";
function DropDown(props) {

    function submitHandler(event) {
        props.onSelectYear(event.target.value);
    }
    return (
        <div className="dropdown__wrap">
        <select onChange={submitHandler}>
        <option value="all">All</option>
        {props.yearsArr().map(ele => {
                return <option value={ele}>{ele}</option>
            })}
        </select>
        </div>
    )
}


export default DropDown;