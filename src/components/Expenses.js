import React from "react";
import ExpensesItem from "./ExpenseItems";
import "./Expenses.css";
import  Card  from "./Card";

export const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpensesItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpensesItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpensesItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
    </Card>
  );
};
