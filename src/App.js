import React, {useState} from "react";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [];
var fetchedArray

const App = () => {

  if(!localStorage.getItem("userData")){
    localStorage.setItem("userData",JSON.stringify(DUMMY_EXPENSES))
  }
  
  // fetchedArray=JSON.parse(localStorage.getItem("userData")) here is the main error


  var [expenses, setExpenses] = useState(DUMMY_EXPENSES);



  const addExpenseHandler = expense => {

   setExpenses(prevExpenses => {
      return [expense, ...expenses]
    });
    // console.log([expense, ...expenses]);
    // console.log(expense.date);
    expense.date=new Date(expense.date)
    localStorage.setItem('userData',JSON.stringify([expense, ...expenses]))
  }
  const  del= p=>{

    

    setExpenses(prevExpenses=>expenses.filter(item=> item.id!==p))
      console.log(p);
  }

  return (
  <div>
    <NewExpense onAddExpense = {addExpenseHandler} />
    <DisplayExpenses delete={del} expenses_list={expenses} />
    
  </div>
 );
};

export default App;
