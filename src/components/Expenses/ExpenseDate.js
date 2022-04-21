import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
    <div className="date">
        <span className="month">{month} </span>
        <span className="day">{day} </span>
        <span className="year">{year}</span>
    </div>
  );
};

export default ExpenseDate;