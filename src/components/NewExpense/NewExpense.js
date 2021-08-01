import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const [isNewExpensesFormVisible, setNewExpensesFromVisiblity] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString()};
        props.onAddExpense(expenseData);
        setNewExpensesFromVisiblity(false)
    };

    const changeNewExpenseFormVisiblity = () => {
        setNewExpensesFromVisiblity(true)
    }

    const cancelNewExpenseForm = () => {
        setNewExpensesFromVisiblity(false)
    }

    return (
        <div className="new-expense">
            {!isNewExpensesFormVisible && <button onClick={changeNewExpenseFormVisiblity}>Add New Expenses below</button>}
            {isNewExpensesFormVisible && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelClick={cancelNewExpenseForm}></ExpenseForm>}
            
        </div>
    )
}

export default NewExpense;