import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({ title, amount, date }) {

    const [itemTitle, setItemTitle] = useState(title);

    function handleClick() {
        setItemTitle('Updated !');
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{itemTitle}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                <button onClick={handleClick}>Change Title</button>
            </Card>
        </li>

    );
}

export default ExpenseItem;