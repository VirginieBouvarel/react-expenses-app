import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';
import './Expenses.css';

function Expenses({ expenses }) {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    function handleFilterChange(selectedYear) {
        setFilteredYear(selectedYear);
    }



    return (
        <Card className="expenses">

            <ExpensesFilter
                selected={filteredYear}
                onFilterChange={handleFilterChange}
            />

            <ExpensesList expenses={filteredExpenses} />

        </Card>
    );
}

export default Expenses;