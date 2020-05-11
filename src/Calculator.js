import React, { useState } from 'react'

const Calculator = props => {
// Declare state variables
let [answer, setAnswer] = useState('0')
let [operator, setOperator] = useState('')
let [num1, setNum1] = useState('')
let [currentNum, setCurrentNum] = useState('')
let [error, setError] = useState('')

// Event Handlers
const numClick = e => {
    console.log('A number was clicked', e.target.value)
    if (currentNum || e.target.value !== '0') {
        setCurrentNum(currentNum + e.target.value)
    }
}

const opClick = e => {
    console.log('Operator', e.target.value)
    if (operator) {
        setError('operator already set')
    }
    else if (!currentNum) {
        setError('Please enter a number')
    }
    else {
        // Everything is good
        setNum1(currentNum)
        setOperator(e.target.value)
        setError('')
        setCurrentNum('')
    }
}

const clear = () => {
    setAnswer('0')
    setError('')
    setCurrentNum('')
    setNum1('')
    setOperator('')
}

const solve = () => {
    console.log('Calculate the answer')
    if (!num1 || !operator) {
        setError('Please enter a valid expression')
    }
    else if (!currentNum) {
        setError('Enter a second number')
    }
    else {
        let tempAnswer = ''
        if (operator === '+') {
            tempAnswer = Number(num1) + Number(currentNum)
        }
        else if (operator === '-') {
            tempAnswer = Number(num1) - Number(currentNum)
        }
        else if (operator === 'x') {
            tempAnswer = Number(num1) * Number(currentNum)
        }
        else if (operator === '/') {
            tempAnswer = Number(num1) / Number(currentNum)
        }

        setAnswer(tempAnswer.toString().slice(0, 10))
        setError('')
        setCurrentNum(tempAnswer.toString().slice(0, 10))
        setNum1('')
        setOperator('')
    }
}

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {num1 || currentNum} {operator} {operator ? currentNum : ''}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={opClick} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={opClick} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick} value="7">7</button>
                    <button className="calc-button" onClick={numClick} value="8">8</button>
                    <button className="calc-button" onClick={numClick} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={opClick} value="x">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick} value="4">4</button>
                    <button className="calc-button" onClick={numClick} value="5">5</button>
                    <button className="calc-button" onClick={numClick} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={opClick} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick} value="1">1</button>
                    <button className="calc-button" onClick={numClick} value="2">2</button>
                    <button className="calc-button" onClick={numClick} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={opClick} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numClick} value="0">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={solve} value="=">=</button>
                </div>
            </div>
            <p className="error">{error}</p>
        </div>
    )
}

export default Calculator