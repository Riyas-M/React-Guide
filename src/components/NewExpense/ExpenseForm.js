import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmt, setEnteredAmt] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [UserInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmt: '',
    //     enteredDate: ''
    // })


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...UserInput,
        //     enteredTitle: event.target.value
        // });
    };

    const amtChangeHandler = (event) => {
        setEnteredAmt(event.target.value);
        // setUserInput({
        //     ...UserInput,
        //     enteredAmt: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...UserInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmt,
            date:  enteredDate
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmt('');
        setEnteredDate('');
        console.log(expenseData, '--expenseData--');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmt} onChange={amtChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-01-01' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.onCancelClick}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;