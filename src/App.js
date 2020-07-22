import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [input, setInput] = useState([])
  const [negative, setNegative] = useState(false)

  const addToInput = (e) => {
    let value = e.target.innerText
    if (value !== "." && input.length <= 10) {
      setInput([...input, value])
      console.log(input)
    } else if (value === "." && !input.includes(".")) {
      setInput([...input, value])
    }
  }

  const clearInput = (e) => {
    setInput([])
  }

  const isNegative = (e) => {
    if (negative === false) {
      setNegative(true)
      setInput(["-", ...input])
    } else {
      setNegative(false)
      setInput(input.slice(1))
    }
  }

  // const multiply = (e) => {


  // }

  return (
    <div className="App">
      <Calculator input={input} addToInput={addToInput} clear={clearInput} isNegative={isNegative}/>
    </div>
  );
}

export default App;
