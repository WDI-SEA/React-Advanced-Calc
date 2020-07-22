import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator.jsx'

function App() {

  // set state for the numbers to be calculated since input will be variable
  // returns a pair of values: the current state and a function that updates it - react docs
  let [total, setTotal] = useState(0);
  // the operator will be a string that changes -- the button value is a string, so we start with empty string
  let [operator, setOperator] = useState("");
  // error message state
  let [initErrMessage, setErrMessage] = useState("");
  // user input consists of two numbers 
  let [nextNumber, setNextNumber] = useState(0);

  // handle when certain button operators are clicked

  // probably need an onclick handler 

  // clear button handler
  const allClear = () => {
    //set all states back to their "zeroed-out condition"
    setTotal(0);
    setOperator("");
    setErrMessage("");
    setNextNumber(0);
  }

  // grab the number
  const handleNumberClick = (e) => {
    let value = parseInt(e.target.innerText);
    console.log(value);
    setNextNumber(value);
  }

  // calc logic
  const calculatorLogic = () => {
    if (operator === "+") {
      setTotal(total + nextNumber)
    }
    else if (operator === "-") {
      setTotal(total - nextNumber) 
    }
    else if (operator === "*") {
      setTotal(total * nextNumber)
    }
    else if (operator === "/") {
      setTotal(total / nextNumber)
    }
    else if (operator === "%") {
      console.log("we haven't handled this yet")
    }
  }

  return (
    <div className="App">
      <Calculator 
      logic={calculatorLogic}
      clickNumber={handleNumberClick}
      clear={allClear}/>
    </div>
  );
}

export default App;
