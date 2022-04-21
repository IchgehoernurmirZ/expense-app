import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.price}/>
            ))}
        </Card>
    )
}

export default Expenses;
