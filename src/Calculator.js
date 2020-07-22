import React, { useState } from 'react'

const Calculator = props => {

    //this is so frustrating becuase i get the basic functionality but not at all sure how to get this to actutally work. I know i've learned alot but there are times like this where i feel completely brainless in my knowledge.
    
    // Declare state variables
    //the base answer
    let [answer, setAnswer] = useState('0')
    //the numbers pressed
    let [pressedNum, setPressedNum] = useState('')

    let [num, setNum] = useState('')

    let [operator, setOperator] = useState('')

// Handle a number getting pressed
    const numPress = e => {
        console.log(e.target.value)
        if (e.target.value !== '0' || pressedNum !== '') {
            setPressedNum(pressedNum + e.target.value)
        }
    }

    // Handle decimal points
    const decimalUse = () => {
        if (!pressedNum) {
            setPressedNum('0.')
        } else if (pressedNum.indexOf('.') === -1) {
            setPressedNum(pressedNum + '.')
        }
    }

    // Handle operators +, -, *, /, and %
    const functionPressed = e => {
        setNum(pressedNum)
        setOperator(e.target.value)
        setPressedNum('')
        console.log(setOperator)
    }

    const plusMinus = () => {
        if (pressedNum) {
            setPressedNum(pressedNum * -1)
        }
    }

    // Clear the state
    const clear = () => {
        setAnswer('0')
        setPressedNum('')
        setNum('')
        setOperator('')
    }

    const calculate = () => {
        let tempAnswer = ''
        if (operator === '+') {
            tempAnswer = Number(num) + Number(pressedNum)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
            //Number
        } else if (operator === '-') {
            tempAnswer = Number(num) - Number(pressedNum)
        } else if (operator === '*') {
            tempAnswer = Number(num) * Number(pressedNum)
        } else if (operator === '/') {
            tempAnswer = Number(num) / Number(pressedNum)
        } else if (operator === '%') {
            tempAnswer = Number(num) % Number(pressedNum)
        }

        setAnswer((tempAnswer.toString()).slice(0, 10))
        setPressedNum((tempAnswer.toString()).slice(0, 10))
        setOperator('')
        setNum('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
                    <div className="calc-container">
                <p>Values: {num || pressedNum} {operator} {operator ? pressedNum : ''}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={plusMinus}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={functionPressed} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={functionPressed} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="7">7</button>
                    <button className="calc-button" onClick={numPress} value="8">8</button>
                    <button className="calc-button" onClick={numPress} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={functionPressed} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="4">4</button>
                    <button className="calc-button" onClick={numPress} value="5">5</button>
                    <button className="calc-button" onClick={numPress} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={functionPressed} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPress} value="1">1</button>
                    <button className="calc-button" onClick={numPress} value="2">2</button>
                    <button className="calc-button" onClick={numPress} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={functionPressed} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numPress} value="0">0</button>
                    <button className="calc-button" onClick={decimalUse}>.</button>
                    <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator