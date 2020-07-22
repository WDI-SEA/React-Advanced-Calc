import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  // const [input, setInput] = useState(0)
  // const [negative, setNegative] = useState(false)
  // const [numOne, setNumOne] = useState(0)
  // //const [numTwo, setNumTwo] = useState(0)
  // const [operator, setOperator] = useState()


  // const addToInput = (e) => {
  //   let value = e.target.innerText
  //   if (value !== "." && input.length <= 10) {
  //     setInput([...input, value])
  //     console.log(value)
  //   } else if (value === "." && !input.includes(".")) {
  //     setInput([...input, value])
  //   }
  //   console.log(input)
  // }
  // const clearInput = (e) => {
  //   setInput([])
  // }

  // const isNegative = (e) => {
  //   if (negative === false) {
  //     setNegative(true)
  //     setInput(["-", ...input])
  //   } else {
  //     setNegative(false)
  //     setInput(input.slice(1))
  //   }
  // }
  // const handleOperator = (e) => {
  //   setOperator(e.target.innerText)
  //   setNumOne(input)
  //   clearInput()
  //   console.log(`input: ${input}`)
  //   console.log(`numOne: ${numOne}`)
  //   console.log()
  // }


  return (
    <div className="App">
      <Calculator /> 
    </div>
  );
}

export default App;
