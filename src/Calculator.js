// import React, { Component } from 'react'
import { useState } from 'react'
import React from 'react'

export default function Calculator() {
    // Declare state variables
    // store operator in state
    const [operator, setOperator] = useState('')
    // store numerical value in state
    const [number, setNumber] = useState('')
    // store total in state
    const [total, setTotal] = useState(0)

    // clear 
    const clearCalculator = () => {
        setNumber('')
        setOperator('')
        setTotal(0)
    }

    const handleNumberPress = (e) => {
        if (number === null) {
            setNumber(e.target.value)
        } else {
            setNumber(number + e.target.value)
        }
    }

    const handleOperator = (e) => {
        setOperator(e.target.value)
        setTotal(Number(number))
        setNumber('')
    }

    // calculate when equal button is pressed
    const calculate = async() => {
        // setNumber(Number(number))
        let operation = 0
        switch (operator) {
            case '+':
                operation = total + number
                break
            case '-':
                operation = total - number
                break
            case 'x':
                operation = total * number
                break
            case '/':
                operation = total / number
                break
            default:
                console.log("I've never seen math like that")
                break
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{number}</div>
                <div className="calc-row">
                    <button onClick={clearCalculator} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={handleOperator}className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumberPress} className="calc-button">7</button>
                    <button onClick={handleNumberPress} className="calc-button">8</button>
                    <button onClick={handleNumberPress} className="calc-button">9</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumberPress} className="calc-button">4</button>
                    <button onClick={handleNumberPress} className="calc-button">5</button>
                    <button onClick={handleNumberPress} className="calc-button">6</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumberPress} className="calc-button">1</button>
                    <button onClick={handleNumberPress} className="calc-button">2</button>
                    <button onClick={handleNumberPress} className="calc-button">3</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumberPress} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}