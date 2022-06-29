import React, { useState } from 'react'
import { useContextProvider } from '../context/ContextProvider'

function AddExpenseForm() {

    const [{expenses},dispatch] = useContextProvider();

    const [expensesName, setExpensesName] = useState("")
    const [expensesCost, setExpensesCost] = useState("")

    const addExpenses = (e) => {
        e.preventDefault()

        if(!expensesName && !expensesCost){
            return;
        }

        let newExpensesName = {
            id: new Date().getTime(),
            name: expensesName,
            cost : expensesCost,
        }

        dispatch({
            type:"ADD_EXPENSE",
            payload:newExpensesName

        })

        setExpensesName("")
        setExpensesCost("")

        console.log(expenses);
    }

    return (
        <form >
            <div className='row d-flex justify-content-center align-items-center w-100'>
                <div className="col-sm">
                    <label htmlFor="name" className='mb-3 fs-5 fw-bold'> Name </label>
                    <input type="text" required="required" className='form-control' id='name' value={expensesName} onChange={(e) => {
                        setExpensesName(e.target.value)
                    }}/>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost" className='mb-3 fs-5 fw-bold'> Cost </label>
                    <input type="number" required="required" className='form-control' id='cost' value={expensesCost} onChange={(e) => {
                        setExpensesCost(e.target.value)
                    }} />
                </div>
                <div className='col-sm mt-5'>
                    <button type='submit' className='btn btn-primary' onClick={(e) => {
                        addExpenses(e)
                    }}> Save </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm