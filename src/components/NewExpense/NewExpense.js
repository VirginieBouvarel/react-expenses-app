import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react'

function NewExpense({ onAddExpense }) {
    const [isEditing, setIsEditing] = useState(false);


    function handleSaveExpenseData(enteredExpenseData) {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(newExpense);
        setIsEditing(false);
    }

    function handleStartEditing() {
        setIsEditing(true);
    }

    function handleStopEditing() {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">

            { !isEditing &&
                <button onClick={handleStartEditing}>Add New expense</button>
            }

            { isEditing &&
                <ExpenseForm
                    onSaveExpenseData={handleSaveExpenseData}
                    onCancel={handleStopEditing}
                />
            }
        </div>
    );
}

export default NewExpense;