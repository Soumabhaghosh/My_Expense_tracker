import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function DisplayExpenses(props) {


  const [filterYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const filterChangeHandler = year => {
    setFilteredYear(year);  
    
  }
  
  
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

      <Card className="expenses" >

        <ExpensesFilter selected={filterYear} onFilterChange={filterChangeHandler}/>

        <ExpensesChart expenses={filteredExpenses} />
        

        {filteredExpenses.length === 0 && (<h1>No expenses found.</h1>)}
        
        {
          filteredExpenses.length > 0 && 
          (filteredExpenses.map((i) => (
           
            <div>
              <ExpenseItem
            key={i.id}
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
            {/* <button onClick={()=>{onclickHand()}}>Get Total</button> */}
    </div>
  );
}

export default DisplayExpenses;
