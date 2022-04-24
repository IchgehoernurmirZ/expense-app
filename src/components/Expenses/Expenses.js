import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2019');
    const yearFilter = (selectedYear) => {
        setYear(selectedYear);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === parseInt(year));

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter defaultYear={year} onSelectYear={yearFilter}/>
                <ExpensesChart selectedYear={year} expenses={filteredExpenses}/>
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;
