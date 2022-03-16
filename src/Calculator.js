
import React, { useState } from "react"

export default function Calculator() {
    // Declare state variables
    const [num1, setNum1] = useState('')
    const [num, setNum] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')
    const [operator, setOperator] = useState('')

    const reset = () => {
        setNum1('')
        setNum('')
        setResult(0)
        setError('')
        setOperator('')
    }

    const handleNumClick = (e) => {
        console.log(e)
    }
    // const handleResetClick
    // const handleOperatorClick
    
    return (
      <div className="container">
        <h1>React Calculator</h1>
        <div className="calc-container">
          <p>Values: </p>
          <div className="answer-box">TBD</div>
          <div className="calc-row">
            <button  className="calc-button calc-button-top">
              AC
            </button>
            <button className="calc-button calc-button-top">
              +/-
            </button>
            <button className="calc-button calc-button-top">
              %
            </button>
            <button className="calc-button calc-button-op">
              /
            </button>
          </div>
          <div className="calc-row">
            <button onClick={() => handleNumClick()} className="calc-button">
              7
            </button>
            <button className="calc-button">
              8
            </button>
            <button  className="calc-button">
              9
            </button>
            <button  className="calc-button calc-button-op">
              x
            </button>
          </div>
          <div className="calc-row">
            <button className="calc-button">4</button>
            <button className="calc-button">5</button>
            <button className="calc-button">6</button>
            <button className="calc-button calc-button-op">-</button>
          </div>
          <div className="calc-row">
            <button className="calc-button">1</button>
            <button className="calc-button">2</button>
            <button className="calc-button">3</button>
            <button className="calc-button calc-button-op">+</button>
          </div>
          <div className="calc-row">
            <button className="calc-button width-2">0</button>
            <button className="calc-button">.</button>
            <button className="calc-button calc-button-op">=</button>
          </div>
        </div>
      </div>
    );
}
