import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseData = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    onAdd(expenseData);
    setShowForm(false);
  };

  const onClickAddExpense = () => {
    setShowForm(true);
  };

  const onClickCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm onSave={saveExpenseData} onCancel={onClickCancel} />
      )}
      {!showForm && <button onClick={onClickAddExpense}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
