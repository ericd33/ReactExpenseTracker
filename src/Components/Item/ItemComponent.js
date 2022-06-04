import './ItemComponent.css';
import React from 'react';
import Card from '../../UI/Card'
function ItemComponent(props) {
    let thecolor = 'item__green';
    if (props.price < 0) {
        thecolor = 'item__red';
    }

  return (
    <Card hideThis={true}>
    <div className="item__wrap">
        <div className={"item__price " + thecolor}><h3>{"$" + props.price}</h3></div>
        <div className="item__name">{props.name}</div>
        <div className="item__date">{props.date.toLocaleDateString()}</div>
    </div>
    </Card>
  );
}

export default ItemComponent;
