import React, {useState} from "react";
import DisplayExpenses from "./components/Expenses/DisplayExpenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Header from "./components/Header/Header";

let DUMMY_EXPENSES = [];
// console.log(typeof DUMMY_EXPENSES);
var filter=[]

const App = () => {

  if(!localStorage.getItem("userData")){
    localStorage.setItem("userData",JSON.stringify(DUMMY_EXPENSES))
  }
  else{
    DUMMY_EXPENSES=JSON.parse(localStorage.getItem("userData"))
  }

  


  var [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // var [total,changedTotal]=useState({jan:0,feb:0,aug:0})


  const addExpenseHandler = expense => {

   setExpenses(prevExpenses => {
      return [expense, ...expenses]
    });
    
    expense.date=new Date(expense.date)
    localStorage.setItem('userData',JSON.stringify([expense, ...expenses]))
  }

  const  del= p=>{

    filter=expenses.filter(item=> item.id!==p)

    setExpenses(prevExpenses=>filter)
    localStorage.setItem('userData',JSON.stringify(filter))
     
  }

  return (
  <div>
    <Header/>
    <NewExpense onAddExpense = {addExpenseHandler} />
    <DisplayExpenses  delete={del} expenses_list={expenses} />
    
  </div>
 );
};

export default App;
