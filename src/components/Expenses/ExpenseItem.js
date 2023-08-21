import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// gonna learn about states now!

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const titleChangeHandler = () => {
  //   setTitle("Updated");
  // }
  const onClickHand =(e)=>{
    props.delete(e);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="expense-item__button" onClick={()=>onClickHand(props.id)}>delete</button>
      <br></br>
    </Card>
  );
}

export default ExpenseItem;
