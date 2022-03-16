import React, { Component } from 'react'
import {useState} from 'react'

function Calculator() {
    // Declare state variables
    let [num, setNum] = useState('')
    let [num2, setNum2] = useState('')
    let [calculated, setCalculated] = useState('0')
    let [operator, setOperator] = useState('')

    // functions
    // setting number values -- onclick
    const numbers = (e) => {
        setNum(num + e.target.value) // adds the target value (button click) to num
        console.log(num)
    }


    // onClick for operators +, -, *, /
    const operators = (e) => {
        setNum2(num) // stores our previous num in the num2 state
        setNum('') // clears old num value to prepare for new value
        // setOperator('') // clears operator first - no repeating operator
        setOperator(e.target.value) // logs what operator is pressed
        console.log(operator)
    }

    const clear = () => {
        setNum('')
        setNum2('')
        setCalculated('0')
        setOperator('')
        // sets all of the states to be empty
    }

    const answer = () => {
        let answer = 0

            if (operator ===  '+') {
                answer = Number(num) + Number(num2)
            }
            else if (operator === '-') {
                answer = Number(num) - Number(num2)
            }
            else if (operator === '*') {
                answer = Number(num) * Number(num2)
            }
            else if (operator === '/') {
                answer = Number(num) / Number(num2)
            }
            else if (operator === '%') {
                answer = Number(num) % Number(num2)
            }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={operators} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={operators} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbers} value="7">7</button>
                    <button className="calc-button" onClick={numbers} value="8">8</button>
                    <button className="calc-button" onClick={numbers} value="9">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbers} value="4">4</button>
                    <button className="calc-button" onClick={numbers} value="5">5</button>
                    <button className="calc-button" onClick={numbers} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operators} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numbers} value="1">1</button>
                    <button className="calc-button" onClick={numbers} value="2">2</button>
                    <button className="calc-button" onClick={numbers} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operators} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator