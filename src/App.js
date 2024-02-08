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
    DUMMY_EXPENSES=[...JSON.parse(localStorage.getItem("userData"))]
  }

  


  var [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // var [total,changedTotal]=useState({jan:0,feb:0,aug:0})


  const addExpenseHandler = expense => {

   setExpenses( e => 
       [expense, ...expenses]
    );
    
    expense.date=new Date(expense.date)
    localStorage.setItem('userData',JSON.stringify([expense, ...expenses]))
  }

  const  del= p=>{

    filter=expenses.filter(item=> item.id!==p)

    setExpenses(filter)
    localStorage.setItem('userData',JSON.stringify(filter))
     
  }

  const [isDark,setDark]=useState(JSON.parse(localStorage.getItem('key')))
  // console.log(isDark)

  if(isDark){
    // console.log("bod is light")
    document.body.style.backgroundColor='#f2f28f'
    // localStorage.setItem('key',isDark);
  }else{
    // console.log("body is dark")
    document.body.style.backgroundColor='#707069'
    // localStorage.setItem('key',isDark)
  }

  const handleClick = () => {
    
    if(isDark){
      document.body.style.backgroundColor='#f2f28f'
      localStorage.setItem('key',JSON.stringify(!isDark));
      document.body.style.transition='background 0.2s linear'
    }else{
      document.body.style.backgroundColor='#707069'
      document.body.style.transition='background 0.2s linear'
      localStorage.setItem('key',JSON.stringify(!isDark))
      // transition: background 0.2s linear;
    }
    setDark(!isDark)
    
  };

  return (
  <div>
    
    <Header  func_click={handleClick} dark={isDark}/>
    
    <NewExpense onAddExpense = {addExpenseHandler} />
    <DisplayExpenses dark={isDark}  delete={del} expenses_list={expenses} />
    
  </div>
 );
};

export default App;
