import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpensesList from "./components/ExpensesList";
import AddExpenseForm from "./components/AddExpenseForm";


const App = () => {

  

  return (
      <div className="container">
        <h1 className="mt-5 w-100 text-center"> My Budget Planner</h1>
        <div className="row mt-5">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-5">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpensesList/>
          </div>
        </div>
        <h3 className="mt-5">Add Expense</h3>
        <div className="row mt-4">
          <div className="col-sm">
            <AddExpenseForm/>
          </div>
        </div>
      </div>

  )
}

export default App