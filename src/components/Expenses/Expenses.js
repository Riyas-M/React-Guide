import React, { useState } from 'react';

import Card from  '../UI/Card';
import ExpensesFilter from  '../Expenses/ExpensesFilter';
import ExpenseList from  '../Expenses/ExpenseList';
import ExpensesChart from  '../Expenses/ExpensesChart';
import  './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setYear] = useState('2020');

    const filterChangedHandler = (selectedYear) => {
        setYear(selectedYear);
    };

    const filteredExpensesArray = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeYear={filterChangedHandler} />
                <ExpensesChart expense={filteredExpensesArray}></ExpensesChart>
                <ExpenseList items={filteredExpensesArray} />
            </Card>
        </div>
    );
}
  
export default Expenses;