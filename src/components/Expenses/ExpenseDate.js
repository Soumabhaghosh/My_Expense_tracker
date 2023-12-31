import "./ExpenseDate.css";
const months = [
  "January", "February", "March",
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December"
];

function ExpenseDate(props) {
  const month = new Date(props.date).getMonth();
  const day = new Date(props.date).getDate();
  const year = new Date(props.date).getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{months[month]}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
