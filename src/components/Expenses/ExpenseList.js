import React from 'react';

import  './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if(props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
    }

    return (
    <ul className="">{props.items.map((expense, index) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
        ))}
    </ul>)
}
  
export default ExpensesList;