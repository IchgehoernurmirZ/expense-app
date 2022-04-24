import React from "react";
import Expenses from './components/Expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const [expenses, setExpenses] = React.useState([
        {
            id: 1,
            title: "Rent",
            price: 100,
            date: new Date(2022, 0, 1)
        },
        {
            id: 2,
            title: "Coffee",
            price: 2,
            date: new Date(2022, 1, 20)
        },
        {
            id: 3,
            title: "Food",
            price: 10,
            date: new Date(2022, 6, 23)
        },
        {
            id: 4,
            title: "Apple Watch",
            price: 299,
            date: new Date(2022, 3, 10)
        }
    ]);
    const addExpenseHandler = (addedExpense) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, addedExpense];
        })
        // setExpenses(expenses.push(addedExpense)); => 结果是5 <因为push的返回值就是数组长度>
        // prevExpenses是哪来的？=> react的update方法中会自动识别prevExpenses（也就是上一次的状态）
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} expenses={expenses}/>
            <Expenses expenses={expenses}/>
        </div>);
};

export default App;