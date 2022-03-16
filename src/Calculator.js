import React, { useState } from 'react'

const Calculator = props => {
    let [answer, setAnswer] = useState('0')
    let [currentNum, setCurrentNum] = useState ('')
    let [error, setError] = useState ('')
    let [num1, setNum1] = useState ('')
    let [operator, setOperator] = useState ('')

    const numPress = e => {
        console.log(e.target.value, 'was pressed')
        if (e.target.value !== '0' || currentNum !== '') {
            setCurrentNum(currentNum + e.target.value)
        }
    }

    const dotPress = () => {
        if (!currentNum) {
            setCurrentNum('0.')
        }
        else if (currentNum.indexOf('.') === -1){
            setCurrentNum(currentNum + '.')
        }
    }

    const operatorPress = e => {
        console.log(e.target.value, 'was pressed')
            if (operator) {
                setError('Operator has already been set. Press clear to reset.')
            }
            else if (!currentNum) {
                setError('A number must be pressed first')
            }
            else {
            setNum1(currentNum)
            setOperator(e.target.value)
            setError('')
            setCurrentNum('')
            }
    }
    const plusMinus = () => {
        if (currentNum) {
            setCurrentNum(currentNum * -1)
        }
    }
// eslint-disable-next-line
    const clear = () => {
        setAnswer('0')
        setCurrentNum('')
        setError('')
        setNum1('')
        setOperator('')
    }
// eslint-disable-next-line
    const calculate = () => {
        console.log('Attempting', num1, operator, currentNum)
        if (!operator || !num1) {
            setError('Please enter a valid expression')
        }
        else if (!currentNum) {
            setError('Enter a second number...')
        }
        else {
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
    }
    // Declare state variables
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
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
    )
}


export default Calculator