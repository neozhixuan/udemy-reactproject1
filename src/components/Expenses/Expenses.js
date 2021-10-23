import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from "./ExpensesList.js"
import ExpensesChart from './ExpensesChart.js'
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const changeFilterYear = (filteredYear) => {
    setFilterYear(filteredYear);
    console.log(filteredYear);
  };

  // expense => : keeps an item if condition is true, else it is not kept.
  // return (something) below
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilterYear={changeFilterYear}
      />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList item={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
