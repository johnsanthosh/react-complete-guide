import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
  return (
    <>
      {filteredExpenses.length === 0 && <h2 className="expenses-list__fallback">No expenses to display.</h2>}
      <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
      </ul>
    </>
  );
};

export default ExpensesList;
