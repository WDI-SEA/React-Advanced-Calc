import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [answer, setAnswer] = useState('0')
    let [currentNum, setCurrentNum] = useState('')
    let [error, setError] = useState('')
    let [num1, setNum1] = useState('')
    let [operator, setOperator] = useState('')


    const dotClick = (e) => {
        if (!currentNum) {
            setCurrentNum('0.')
        }
        else if (currentNum.indexOf('.') === -1) {
            setCurrentNum(currentNum + '.')
        }
    }
    const calClick = (e) => {
        let tempAnswer = ''

        if (operator === '+') {
            tempAnswer = Number(num1) + Number(currentNum)
        }
        else if (operator === '-') {
            tempAnswer = Number(num1) - Number(currentNum)
        }
        else if (operator === '*') {
            tempAnswer = Number(num1) * Number(currentNum)
        }
        else if (operator === '/') {
            tempAnswer = Number(num1) / Number(currentNum)
        }
        else if (operator === '%') {
            tempAnswer = Number(num1) % Number(currentNum)
        }

        setAnswer((tempAnswer.toString()).slice(0, 10))
        setError('')
        setCurrentNum((tempAnswer.toString()).slice(0, 10))
        setOperator('')
        setNum1('')
    }

    const stateClick = (e) => {
        if (currentNum) {
            setCurrentNum(currentNum * -1)
        }
    }

    const clearClick = (e) => {
        setAnswer('0')
        setCurrentNum('')
        setError('')
        setNum1('')
        setOperator('')
    }

    const propClick = (e) => {
        if (operator) {
            setError('Operator has already been set. Press clear to reset.')
        }
        else if (!currentNum) {
            setError('A number must be pressed first.')
        }
        else {
            setNum1(currentNum)
            setOperator(e.target.value)
            setError('')
            setCurrentNum('')
        }
    }


    const numClick = (e) => {
        if (e.target.value !== '0' || currentNum !== '') {
            setCurrentNum(currentNum + e.target.value)
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {num1 || currentNum} {operator} {operator ? currentNum : ''}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button onClick={clearClick} className="calc-button calc-button-top">AC</button>
                    <button onClick={stateClick} className="calc-button calc-button-top">+/-</button>
                    <button onClick={propClick} className="calc-button calc-button-top" value="%">%</button>
                    <button onClick={propClick} className="calc-button calc-button-op" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button" value="7">7</button>
                    <button onClick={numClick} className="calc-button" value="8">8</button>
                    <button onClick={numClick} className="calc-button" value="9">9</button>
                    <button onClick={propClick} className="calc-button calc-button-op" value="*">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button" value="4">4</button>
                    <button onClick={numClick} className="calc-button" value="5">5</button>
                    <button onClick={numClick} className="calc-button" value="6">6</button>
                    <button onClick={propClick} className="calc-button calc-button-op" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button" value="1">1</button>
                    <button onClick={numClick} className="calc-button" value="2">2</button>
                    <button onClick={numClick} className="calc-button" value="3">3</button>
                    <button onClick={propClick} className="calc-button calc-button-op" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button width-2" value="0">0</button>
                    <button onClick={dotClick} className="calc-button">.</button>
                    <button onClick={calClick} className="calc-button calc-button-op" value="=">=</button>
                </div>
            </div>
            <p className="error">{error}</p>
        </div>
    )
}

export default Calculator