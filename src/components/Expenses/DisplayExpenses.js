import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function DisplayExpenses(props) {


  const [filterYear, setFilteredYear] = useState(new Date().getFullYear().toString());


  
  
  const filteredExpenses = props.expenses_list.filter(expense => new Date(expense.date).getFullYear().toString() === filterYear);

  // var sum=0;
  // const hashmap=new Map()
  //  filteredExpenses.map((i,index)=>{
  //   // sum+=i.amount
  //   var month=new Date(i.date).getMonth()
  //   hashmap.set(month,hashmap.get(month)+i.amount)
  //  })
  // // props.setTotal({
  // //   jan:0,
  // //   feb:0,
  // //   aug:sum
  // // })
  // function onclickHand(){
  //   props.setTotal({
  //     jan:hashmap.get(0),
  //     feb:0,
  //     aug:hashmap.get(7)
  //   })
  // }

  return (
    <div>

      <Card className={props.dark?"expenses":'dark-card'} >

        <ExpensesFilter dark={props.dark} selected={filterYear} onFilterChange={setFilteredYear}/>

        <ExpensesChart expenses={filteredExpenses} />
        

        {filteredExpenses.length === 0 && (<h1 className={props.dark?"header-style":'dark-header'}>No expenses found.</h1>)}
        
        {
          filteredExpenses.length > 0 && 
          (filteredExpenses.map((i) => (
           
            <div key={i.id}>
              <ExpenseItem
            
            id={i.id}
            title={i.title}
            amount={i.amount}
            date={i.date}
            delete={props.delete}
            
          /> 
          
            </div>
          
          
        ))
        )}


            </Card>
            
    </div>
  );
}

export default DisplayExpenses;
