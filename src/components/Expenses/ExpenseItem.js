import React  from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// gonna learn about states now!

function ExpenseItem(props) {

 
  const onClickHand =(e)=>{
    props.delete(e);
  }

 

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        
      </div>
      <div className="expense-item__price">&#8377;{props.amount}</div>
      <button className="expense-item__button" onClick={()=>onClickHand(props.id)}>delete</button>
      <br></br>
    </Card>
  );
}

export default ExpenseItem;
