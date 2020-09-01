import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  //useState -> the first one is its original form but the second one is what changes come next

  let [num, setNum] = useState(0); //defines the num
  let [operator, setOperator] = useState(""); //operator
  let [total, setTotal] = useState(""); //total
  let [error, setError] = (""); //does this work?

   //clear button this should be simple to do?
   const clear = () => {
    setTotal(0);
    setNum("");
    setOperator("");
  }

  //operator function for my +, -, *, /, and i guess % <- need to look up
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
      let total2 = num * Math.floor(total1);
      let whatsLeft = total - total2;
      setTotal(Math.round(whatsLeft));
    }
  }

  // //error message & current number (how do i do this) does it need to show in my other functions?
  // const err = () => {
  //   if(!num){ //this is for my number
  //     setError("Error: two operators can't be used")
  //   } else {
  //     //am i missing something else?
  //   }
  // }

  //current number or current state
  // currentNum = () => {
  //   if(num) {

  //   } else {

  //   }
  // }

  let handleButtons = (e) => {
    e.preventDefault();
    console.log('please work')
    if (num || e.target.value !== '0') {
      setNum(num + e.target.value)
    }
    console.log(num)
  }

  let handleOperator = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setOperator(e.target.value )
  }

  return (
    <div className="App">
      <Calculator 
      formula={formula}
      total={total}
      clear={clear}
      operator={operator}
      //err={err}
      error={error}
      //currentNum={currentNum}
      handleButtons={handleButtons}
      num={num}
      handleOperator={handleOperator}
      />
    </div>
  );
}

export default App;
