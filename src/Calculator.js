import React, { useState, useEffect } from 'react';

const Calculator = props => {
    // Declare state variables
    const [input, setInput] = useState(0)
    const [negative, setNegative] = useState(false)
    const [operator, setOperator] = ('')
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [total, setTotal] = useState('')

    const addSubtract = () => {
        if (input) {
            setInput(input * -1)
        }
    }

    const numberSelect = (e) => {
        if (input > 0) {
            setInput(input + e.target.innerText)
        } else {
            setInput(e.target.innerText)
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
        } else if (operator === "*") {
            answer = parseInt(num1) * parseInt(num2)
            setInput(answer)
        } else if (operator === "/") {
            answer = parseInt(num1) / parseInt(num2)
            setInput(answer)
        }
        setTotal('')
    }
}

const operatorSelect = e => {
    if (!operator) {
        setNum1(input)
        setOperator(e.target.value)
        setTotal('')
        setInput('')
    } else {
        setTotal('I can\'t do two at once!')
    }
}

const calculate = () => {
    setNum2(input)
}

// clearing our calc's input value 
const clear = (e) => {
    setNum1(0)
    setNum2(0)
    setOperator()
    setInput(0)
    setTotal('')
}

return (
    <div className="container">
        <h1>React Calculator</h1>
        <div className="calc-container">
            <p>Values: </p>
            <div className="answer-box">{input}</div>
            <div className="calc-row">
                <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                <button className="calc-button calc-button-top" onClick={addSubtract}>+/-</button>
                <button className="calc-button calc-button-top" onClick={operatorSelect} value="%">%</button>
                <button className="calc-button calc-button-op" onClick={operatorSelect} value="/">/</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={numberSelect} value="7">7</button>
                <button className="calc-button" onClick={numberSelect} value="8">8</button>
                <button className="calc-button" onClick={numberSelect} value="9">9</button>
                <button className="calc-button calc-button-op" onClick={operatorSelect} value="*">x</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={numberSelect} value="4">4</button>
                <button className="calc-button" onClick={numberSelect} value="5">5</button>
                <button className="calc-button" onClick={numberSelect} value="6">6</button>
                <button className="calc-button calc-button-op" onClick={operatorSelect} value="-">-</button>
            </div>
            <div className="calc-row">
                <button className="calc-button" onClick={numberSelect} value="1">1</button>
                <button className="calc-button" onClick={numberSelect} value="2">2</button>
                <button className="calc-button" onClick={numberSelect} value="3">3</button>
                <button className="calc-button calc-button-op" value="+">+</button>
            </div>
            <div className="calc-row">
                <button className="calc-button width-2" onClick={numberSelect} value="0">0</button>
                <button className="calc-button" onClick={decimal} value=".">.</button>
                <button className="calc-button calc-button-op" onClick={calculate} value="=">=</button>
            </div>
        </div>
        <div>
            {total}
        </div>
    </div>
)

export default Calculator