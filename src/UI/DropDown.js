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
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
        </div>
    )
}


export default DropDown;