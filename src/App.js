import React from "react";
import Expenses from './components/Expenses/Expenses'

const App = () => {
    const expenses = [
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
    ];

    return (
        <div>
            <Expenses expenses={expenses}/>
        </div>);
};

export default App;