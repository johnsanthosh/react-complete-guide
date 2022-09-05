import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [expenseTitle, setExpenseTitle] = useState(title);

  // eslint-disable-next-line no-unused-vars
  const clickHandler = () => {
    setExpenseTitle("Updated!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

ExpenseItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  date: PropTypes.object,
};
