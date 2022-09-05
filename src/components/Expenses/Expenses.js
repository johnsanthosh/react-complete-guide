import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={filteredYear}
          onChange={filterChangeHandler}
        />
        {expenses
          .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
          .map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))}
      </Card>
    </>
  );
};

export default Expenses;
