import React from "react";
import './ExpenseItem.css';

const ExpenseItem = () => {
    const date = new Date().toLocaleDateString();
    return (
        <div className="expense-item">
            <div className="date">{date}</div>
            <div className="expense-item__description">
                <h2>Daily Products</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>
    );
}


export default ExpenseItem;