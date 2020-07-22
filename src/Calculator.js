import React, { useState } from 'react'

const Calculator = props => {
    let [inputNumber, setInputNumber] = useState('')
    // Declare state variables
    const calcAction = (e) => {
        console.log("action press")
        console.log(e.target.value)
        setInputNumber(inputNumber + e.target.value)
    }

    const operatorAction = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {inputNumber} </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top" >%</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="7">7</button>
                    <button className="calc-button" onClick={calcAction} value="8">8</button>
                    <button className="calc-button" onClick={calcAction} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="4">4</button>
                    <button className="calc-button" onClick={calcAction} value="5">5</button>
                    <button className="calc-button" onClick={calcAction} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={calcAction} value="1">1</button>
                    <button className="calc-button" onClick={calcAction} value="2">2</button>
                    <button className="calc-button" onClick={calcAction} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operatorAction} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={calcAction}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator