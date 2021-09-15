import React, {useState} from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import Card from "./Card";

const ExpensesItem = (props) => {
  //useState is one of the react hooks, hooks usually start with word 'use' and should be call inside components
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
      setTitle("Updated");
      console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button  onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpensesItem;
