import React, { useState } from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  const [input, setInput] = useState([])

  const addToInput = (e) => {
    let value = e.target.innerText
    setInput([...input, value])
    console.log(input)
  }

  const clearInput = (e) => {
    setInput([])

  }

  return (
    <div className="App">
      <Calculator input={input} addToInput={addToInput} clear={clearInput}/>
    </div>
  );
}

export default App;
