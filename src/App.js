import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  let [num, setNum] = useState(0); //defines the num
  let [operator, setOperator] = useState(""); //operator
  let [total, setTotal] = useState(""); //total

  //operator function
  const formula = () => {
    if (operator === '+') {
      setTotal(total + parseInt(num))
    } else if (operator === '-') {
      setTotal(total + parseInt(num))
    } else if (operator === '/') {
      setTotal(total + parseInt(num))
    } else if (operator === '*') {
      setTotal(total + parseInt(num))
    } else if (operator === '%') {
      // 100 % 7 = 2 
      // // a = 100, n = 7
      // 100 - (7 * floor(100/7)) = 2 | (total / num) = totalOne | (num * totalOne) = totalTwo | total - totalTwo = whatsLeft
      let total1 = total / parseInt(num);
      let total2 = num * floor(total1);
      let whatsLeft = total - total2;
      setTotal(Math.round(whatsLeft));
    }
  }

  //clear button
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
      clear={clear}
      operator={operator}
      />
    </div>
  );
}

export default App;
