import React, { useState } from "react";
import ExpensesItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expenses => (
          <ExpensesItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        
      </Card>
    </div>
  );
};
