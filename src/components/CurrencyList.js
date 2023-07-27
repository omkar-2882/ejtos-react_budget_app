import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyList = () => {
    const { expenses } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleCurrencyChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
        // console.log(e.target.value);
    }
    return (
        <div id='currencyDiv' className='alert alert-success'>
            {/* <span> */}
                Currency:
                <select onChange={handleCurrencyChange} class="alert alert-success form-select" aria-label="Default select example">
                    {/* <option selected value="£">Currency (£ Pound)</option> */}
                    <option selected value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>            
            {/* </span> */}
        </div>
    );
};
export default CurrencyList;
