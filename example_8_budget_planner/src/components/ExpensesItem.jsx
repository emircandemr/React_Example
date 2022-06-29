import React from 'react'
import {TiDelete} from "react-icons/ti"
import { useContextProvider } from '../context/ContextProvider'

function ExpensesItem(props) {

    const [{},dispatch] = useContextProvider();

    const removeExpense = (todoID) => {

        dispatch({
            type:"REMOVE_EXPENSE",
            payload:todoID
        })

    }

  return (

    <li className="expenseItem list-group-item d-flex justify-content-between align-items-center p-3">
        {props.name}
        <div className='d-flex justify-content center align-items-center'>
            <span className='badge bg-primary rounded-pill me-3 fs-6'>
                ${props.cost}
            </span>
            <TiDelete className='cursor-pointer' size="1.8em" onClick={() => {
               removeExpense(props.expense.id)
            }}></TiDelete>
        </div>
    </li>
    )
}

export default ExpensesItem