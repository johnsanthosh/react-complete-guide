import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onChange={filterChangeHandler}
        />
        <ExpensesList filteredExpenses={filteredExpenses} />
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
