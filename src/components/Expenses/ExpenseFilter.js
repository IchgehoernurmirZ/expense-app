import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const handleSelect = (e) => {
        props.onSelectYear(e.target.value);
    };

    return (
        <div className="filter">
            <div className="controls">
                <label>Filter By Year</label>
                <select name="years" id="years" onChange={handleSelect} value={props.defaultYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;