import React from "react";
import "./HeaderStyle.css"
import '@fortawesome/fontawesome-free/css/all.css';

const Header = (props) => {


    return (
        <header className={props.dark ? "dark" : ''}>
            <div></div>
            <h1 className="expense-tracker-heading">Expense Tracker</h1>

           
            <div>
                <input checked={!props.dark} onChange={() => { props.func_click() }} type="checkbox" className="checkbox" id="checkbox" />
                <label  htmlFor="checkbox" className="checkbox-label" >
                    <i className="fas fa-sun"></i>
                    <i className="fas fa-moon"></i>
                   
                    <span className="ball"></span>
                </label>
            </div>
        </header>

    );

};
export default Header