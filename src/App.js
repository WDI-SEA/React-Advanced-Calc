import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  let [input, setInput] = useState([])
  let [negative, setNegative] = useState([false])
  let [operator, setOperator] = useState('')
  let [num1, setNum1] = useState([])
  let [result, setResult] = useState([])

  const clearInput = (e) => {
    setInput([])
    setNegative([false])
    setOperator('')
    setNum1([])
    setResult([])
  }

  const addToInput = (e) => {
    let value = e.target.innerText
    // handle decimals and push inputted numbers(first) into calc 
    if (value !== "." && input.length <= 10) {
      setInput([...input, value])
    } else if (value === "." && !input.includes(".")) {
      setInput([...input, value])
    } else {
      setOperator(e.target.value)
    }
  }


  const isNegative = (e) => {
    if(negative === false) {
      setNegative(true)
      setInput(["-", ...input])
    } else {
      setNegative(false)
      setInput(input.slice(1))
      
    }
  }

  const mathSux = (e) => {
    let operator = e.target.innerText;
    let num1 = input;
    let num2 = [];
    let result = []
    if(operator === "+") {
      result = (Number(num1.toString()) + Number(num2.toString()))
    } else if(operator === "-") {
      result = (Number(num1.toString()) - Number(num2.toString()))
    } else if(operator === "*") {
      result = (Number(num1.toString()) * Number(num2.toString()))
    } else if(operator === "%") {
      result = (Number(num1.toString()) / Number(num2.toString()))
    }
    setResult(result)
}


  return (
    <div className="App">
      <Calculator input={input} addToInput={addToInput} clear={clearInput} isNegative={isNegative} />
    </div>
  );
}

export default App;
