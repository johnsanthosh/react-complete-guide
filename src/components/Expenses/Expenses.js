import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;