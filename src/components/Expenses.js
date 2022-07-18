import Card from "./Card";
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