import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [edit, setEdit] = useState(false);
    const handleExpand = () => {
        setEdit(true);
    }

    const initial = <button onClick={handleExpand}>Add New Expenses</button>;

    const handleCancel = () => {
        setEdit(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: props.expenses[props.expenses.length - 1].id + 1,
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        setEdit(false);
    };


    return (
        <div className="new-expense">
            {edit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={handleCancel}/>}
            {!edit && initial}
        </div>
      );
};

export default NewExpense;