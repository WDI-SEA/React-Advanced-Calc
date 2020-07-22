import React from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  )
}
//   const [input, setInput] = useState(0)
//   const [negative, setNegative] = useState(false)
//   const [operator, setOperator] = ('')
//   const [num1, setNum1] = useState(0)
//   const [num2, setNum2] = useState(0)
//   const [total, setTotal] = useState('')

  // const addToCalc = (e) => {
  //   let value = e.target.innerText
  //   if (value !== "." && input.length <= 10) {
  //     // ensures that the input is less than 10 digits
  //     setInput([...input, value])
  //   } else if (value === "." && !input.includes(".")) {
  //     // makes sure that there aren't multiple decimals in the input 
  //     setInput([...input, value])
  //   }
  // }


  // // checking calc to see if it's negative 
  // const isNegative = (e) => {
  //   if (negative === false) {
  //     setNegative(true)
  //     setInput(["-", ...input])
  //   } else {
  //     setNegative(false)
  //     setInput(input.slice(1))
  //   }
  // }

  // const operatorSelect = e => {
  //   if (!operator) {
  //       setNum1(input)
  //       setOperator(e.target.value)
  //       setError('')
  //       setInput('')
  //     } else {
  //     setError('I can\'t do two at once!')
  //   }
  // }

  // const addSubtract = () => {
  //   if(input) {
  //     setInput(input * -1)
  //   }
  // }

  // useEffect = () => {
  //   let answer = '' 
  //     if (operator === "+") {
  //       answer = parseInt(num1) + parseInt(num2)
  //       setInput(answer)
  //     } else if (operator === "-") {
  //       answer = parseInt(num1) - parseInt(num2)
  //       setInput(answer)
  //     } else if (operator ==="*") {
  //       answer = parseInt(num1) * parseInt(num2)
  //       setInput(answer)
  //     } else if (operator === "/") {
  //       answer = parseInt(num1) / parseInt(num2)
  //       setInput(answer)
  //     }
  //     setMessage('')
  //   }
  // }

  // // clearing our calc's input value 
  // const clearCalc = (e) => {
    
  // }

  // return (
  //     <div className="container">
  //         <h1>React Calculator</h1>
  //         <div className="calc-container">
  //             <p>Values: </p>
  //             <div className="answer-box">{props.input}</div>
  //             <div className="calc-row">
  //                 <button className="calc-button calc-button-top" onClick={clear}>AC</button>
  //                 <button className="calc-button calc-button-top" onClick={addSubtract}>+/-</button>
  //                 <button className="calc-button calc-button-top" onClick={operatorSelect} value="%">%</button>
  //                 <button className="calc-button calc-button-op" onClick={operatorSelect} value="/">/</button>
  //             </div>
  //             <div className="calc-row">
  //                 <button className="calc-button" onClick={numberSelect} value="7">7</button>
  //                 <button className="calc-button" onClick={numberSelect} value="8">8</button>
  //                 <button className="calc-button" onClick={numberSelect} value="9">9</button>
  //                 <button className="calc-button calc-button-op" onClick={operatorSelect} value="*">x</button>
  //             </div>
  //             <div className="calc-row">
  //                 <button className="calc-button" onClick={numberSelect} value="4">4</button>
  //                 <button className="calc-button" onClick={numberSelect} value="5">5</button>
  //                 <button className="calc-button" onClick={numberSelect} value="6">6</button>
  //                 <button className="calc-button calc-button-op" onClick={operatorSelect} value="-">-</button>
  //             </div>
  //             <div className="calc-row">
  //                 <button className="calc-button" onClick={numberSelect} value="1">1</button>
  //                 <button className="calc-button" onClick={numberSelect} value="2">2</button>
  //                 <button className="calc-button" onClick={numberSelect} value="3">3</button>
  //                 <button className="calc-button calc-button-op" value="+">+</button>
  //             </div>
  //             <div className="calc-row">
  //                 <button className="calc-button width-2" onClick={(e) => props.addToCalc(e)} value="0">0</button>
  //                 <button className="calc-button" onClick={(e) => props.addToCalc(e)} value=".">.</button>
  //                 <button className="calc-button calc-button-op" onClick={calculate} value="=">=</button>
  //             </div>
  //         </div>
  //     </div>
  // )
// }

//     <div className="App">
//       <Calculator input={input} addToCalc={addToCalc} clear={clearCalc} isNegative={isNegative} />
//     </div>
//   );
// }

export default App;
