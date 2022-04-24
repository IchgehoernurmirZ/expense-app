import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleInputHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceInputHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dateInputHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const newExpenseItem = {
        title: enteredTitle,
        price: enteredPrice,
        date: new Date(enteredDate),
    };

    const handleSubmit = (event) => {
        // prevent the webpage from reloading
        event.preventDefault();
        props.onSaveExpenseData(newExpenseItem);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
        // event.target.reset(); // 把值反绑进value里可以让我们对value有更多的掌控，可以在onChange方法里对value进行操作
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleInputHandler}/>
                </div>
                <div className="control">
                    <label>Price</label>
                    <input type="number" value={enteredPrice} min="0.01" step="0.01" onChange={priceInputHandler}/>
                </div>
                <div className="control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2024-12-31" onChange={dateInputHandler}/>
                </div>
            </div>
            <div className="actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;