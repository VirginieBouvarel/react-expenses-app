import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense({ onAddExpense }) {

    function handleSaveExpenseData(enteredExpenseData) {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(newExpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
        </div>
    );
}

export default NewExpense;