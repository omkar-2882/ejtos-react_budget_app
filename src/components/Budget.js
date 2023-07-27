import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    console.log(totalExpenses);
    const handleBudgetChange = (e) => {
        if(e.value>20000){
            alert("The value cannot exceed 20000");
            return;
        }
        if(e.value<totalExpenses){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: e.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            <span>Budget: £
                <input type="number" step="10" value = {budget} onChange={handleBudgetChange}/>
            </span>
        </div>
    );
};
export default Budget;
