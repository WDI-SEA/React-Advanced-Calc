import React, { useState, useEffect } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [input, setInput] = useState(0)
  const [negative, setNegative] = useState(false)
  const [operator, setOperator] = ('')
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [total, setTotal] = useState('')

  const addToCalc = (e) => {
    let value = e.target.innerText
    if (value !== "." && input.length <= 10) {
      // ensures that the input is less than 10 digits
      setInput([...input, value])
    } else if (value === "." && !input.includes(".")) {
      // makes sure that there aren't multiple decimals in the input 
      setInput([...input, value])
    }
  }


  // checking calc to see if it's negative 
  const isNegative = (e) => {
    if (negative === false) {
      setNegative(true)
      setInput(["-", ...input])
    } else {
      setNegative(false)
      setInput(input.slice(1))
    }
  }

  const operatorSelect = e => {
    if (!operator) {
        setNum1(input)
        setOperator(e.target.value)
        setError('')
        setInput('')
      } else {
      setError('I can\'t do two at once!')
    }
  }

  const addSubtract = () => {
    if(input) {
      setInput(input * -1)
    }
  }

  useEffect = () => {
    let answer = '' 
      if (operator === "+") {
        answer = parseInt(num1) + parseInt(num2)
        setInput(answer)
      } else if (operator === "-") {
        answer = parseInt(num1) - parseInt(num2)
        setInput(answer)
      } else if (operator ==="*") {
        answer = parseInt(num1) * parseInt(num2)
        setInput(answer)
      } else if (operator === "/") {
        answer = parseInt(num1) / parseInt(num2)
        setInput(answer)
      }
      setMessage('')
    }
  }

  // clearing our calc's input value 
  const clearCalc = (e) => {
    
  }

  return (

    <div className="App">
      <Calculator input={input} addToCalc={addToCalc} clear={clearCalc} isNegative={isNegative} />
    </div>
  );
}

export default App;
