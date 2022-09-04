import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({onAdd}) => {
  const saveExpenseData = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    onAdd(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
