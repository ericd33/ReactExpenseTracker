import './Card.css';
import React from "react";
function Card(props) {

    function setDisplay(h) {
         if (!h) {
             return "card_hidden";
         } else {
            return "card__wrap";
         }

        }
    function setDisplayElements(h) {
        if (!h) {
            return 
        } else {
            return props.children
        }
    }
    return(
    <div className={setDisplay(props.hideThis)}>
        {setDisplayElements(props.hideThis)}
    </div>)
}

export default Card;