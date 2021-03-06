import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) => {

    if (expenses.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            { expenses.map(({ id, title, amount, date }) => (
                <ExpenseItem
                    key={id}
                    title={title}
                    amount={amount}
                    date={date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;