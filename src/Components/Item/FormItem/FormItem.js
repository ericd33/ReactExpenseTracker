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
        <label htmlFor="title">Title: </label>
        <input onChange={titleHandler} value={title} type="text" name="title" required/>

        <label htmlFor="price">Price: </label>
        <input onChange={priceHandler} value={price} type="text" name="price" required></input>

        <label htmlFor="date">Date: </label> 
        <input onChange={dateHandler} type="date" value={date} name="date" required></input>

        <input type="submit" className="submit" name="Submit"></input>
      </form>
    </div>
  );
}

export default FormItem;
