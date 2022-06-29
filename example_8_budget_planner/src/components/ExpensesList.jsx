import React from 'react'
import ExpensesItem from './ExpensesItem'
import { useContextProvider } from '../context/ContextProvider'

function ExpensesList() {
    
    const [{expenses},dispatch] = useContextProvider();

    return (
        <ul className='list-group'>
            {expenses.length<1 && <div className="mt-5 fs-5 fst-italic text-secondary"> Expenses List is Empty </div>}

            {expenses.map( (expense) => (
                <ExpensesItem id={expense.id} name={expense.name} cost={expense.cost} expense={expense}/>
            ))}
        </ul>
  )
}

export default ExpensesList