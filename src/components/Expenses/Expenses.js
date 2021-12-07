import React, { useState } from "react";
import ExpensesItem from "./ExpenseItem";
import "./Expenses.css";
import  Card  from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
      setFilteredYear(selectedYear)
  }

  return (
    <div>
      
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
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
    </div>
  );
};
