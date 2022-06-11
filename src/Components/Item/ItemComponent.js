import './ItemComponent.css';
import React from 'react';
import Card from '../../UI/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

function ItemComponent(props) {
    let thecolor = 'item__green';
    if (props.price < 0) {
        thecolor = 'item__red';
    }
function delClickHandler() {
  props.itemToDel(props.name)
}

  return (
    <Card hideThis={true}>
    <div className="item__wrap">
        <div className={"item__price " + thecolor}><h3>{"$" + props.price}</h3></div>
        <div className="item__name">{props.name}</div>
        <div className="item__date">{props.date.toLocaleDateString()}
        
        </div>
        <FontAwesomeIcon onClick={delClickHandler} icon={faSquareXmark} className="deleteButton" />
    </div>
    </Card>
  );
}

export default ItemComponent;
