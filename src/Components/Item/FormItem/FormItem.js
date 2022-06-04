import React, { useState } from "react";
import "./FormItem.css";


function FormItem(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(props) {
    setTitle(props.target.value);
  }

  function priceHandler(props) {
    setPrice(props.target.value);
  }

  function dateHandler(props) {
    setDate(props.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const submitData = {
      title: title,
      price: price,
      date: new Date(date),
    };
    props.onSaveExpenseData(submitData);
    setTitle('');
    setPrice('');
    setDate('');
  }

  return (
    <div className="form__wrap">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Titulo: </label>
        <input onChange={titleHandler} value={title} type="text" name="title" />

        <label htmlFor="price">Precio: </label>
        <input onChange={priceHandler} value={price} type="text" name="price"></input>

        <label htmlFor="date">Fecha: </label>
        <input onChange={dateHandler} type="date" value={date} name="date"></input>

        <input type="submit" className="submit" name="Submit"></input>
      </form>
    </div>
  );
}

export default FormItem;
