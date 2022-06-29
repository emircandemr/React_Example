import React, { useEffect, useState } from 'react'
import { useContextProvider } from '../context/ContextProvider'

function Remaining() {

  const [{budget,expenses}] = useContextProvider();

  const[remaining , setRemaining] = useState(budget)

  let remainExpense = expenses.reduce( (acc, item) => acc + Number(item.cost),0)

  useEffect ( () => {
    setRemaining(budget-remainExpense)
  } , [expenses])
  
  const alertType = remainExpense > budget ? "alert-danger" : "alert-success"

  return (
    <div className={`alert ${alertType} p-4 fw-bold `}>
        <span>
            Remaining : ${remaining}   
        </span>
    </div>
  )
}

export default Remaining