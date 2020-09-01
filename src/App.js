import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  let [num, setNum] = useState(0); //defines the num
  let [operator, setOperator] = useState(""); //operator
  let [total, setTotal] = useState(""); //total

  const formula = () => {
    if (operator === '+') {
      setTotal(total + parseInt(num))
    } else if (operator === '-') {
      setTotal(total + parseInt(num))
    } else if (operator === '/') {
      setTotal(total + parseInt(num))
    } else if (operator === '*') {
      setTotal(total + parseInt(num))
    }
  }

  const clear = () => {
    setTotal(0);
    setNum("");
    setOperator("");
  }

  return (
    <div className="App">
      <Calculator 
      formula={formula}
      total={total}
      />
    </div>
  );
}

export default App;
