import React ,{useState,useEffect} from 'react';
import { useContextProvider } from '../context/ContextProvider'


function ExpenseTotal() {

  const [{budget,expenses}] = useContextProvider();

  const[spent , setSpent] = useState(0)
  
  useEffect ( () => {
    let spentExpense = expenses.reduce( (acc, item) => acc + Number(item.cost),0)
    setSpent(spentExpense)
  } , [expenses])



  return (
    <div className='alert alert-primary p-4 fw-bold'>
        Spent so far : ${spent}
    </div>
  )
}

export default ExpenseTotal