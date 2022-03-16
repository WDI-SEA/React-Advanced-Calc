// import React, { Component } from 'react'
import React, { useState } from 'react'

// class Calculator extends Component {
export default function Calculator() {
    // Declare state variables

    const [display, setDisplay] = useState('')
    const [operator, setOperator] = useState('')
    const [total, setTotal] = useState('0')
    const [previousNum, setPreviousNum] = useState('')
    const [currentNum, setCurrentNum] = useState('')
    const [error, setError] = useState('')

    const number = (e) => {
        console.log('Number Clicked')
        setCurrentNum(currentNum + e.target.value)
        console.log(currentNum)
    }

    const decimal = () => {
        console.log('Decimal Clicked')
    }

    const handleChangeOperator = (e) => {
        // if (operator) {
        //     calculate()
        // } else {

            console.log('Switching operator')
            // when an operator is clicked, store the currentNumber into the previous number
            setOperator(e.target.value)
            setPreviousNum(currentNum)
            setCurrentNum('')
            console.log(e.target.value)
        // }
    }

    const negative = () => {
        console.log('Negative button')
        let answer = ''
        answer = (Number(currentNum) * (-1)).toString()
        setCurrentNum(answer)
    }

    const percent = () => {
        console.log('Percentage')
        let answer = ''
        answer = (Number(currentNum) / 100).toString()
        // current value divided by 100
        setCurrentNum(answer)
    }

    const calculate = () => {
        console.log('Calculating')
        let answer = ''
        if (operator === '+') {
            answer = (Number(previousNum) + Number(currentNum)).toString()
        } else if (operator === '-') {
            answer = (Number(previousNum) - Number(currentNum)).toString()
        } else if (operator === 'x') {
            answer = (Number(previousNum) * Number(currentNum)).toString()
        } else if (operator === '/') {
            answer = (Number(previousNum) / Number(currentNum)).toString()
        }
        setTotal(answer)
        setPreviousNum(answer)
        setCurrentNum(answer)
        setError('')
    }

    const clear = () => {
        console.log('Clear Button')
        setDisplay('')
        setOperator('')
        setTotal(0)
        setPreviousNum('')
        setCurrentNum('')
        setError('')
        // set all states back to empty strings
    }

    // render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {currentNum} {error} </p>
                <div className="answer-box">{total}</div>
                <div className="calc-row">
                    <button value="clear" onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button value="+/-" onClick={negative} className="calc-button calc-button-top">+/-</button>
                    <button value="%" onClick={percent} className="calc-button calc-button-top">%</button>
                    <button value="/" onClick={handleChangeOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button value="7" onClick={number} className="calc-button">7</button>
                    <button value="8" onClick={number} className="calc-button">8</button>
                    <button value="9" onClick={number} className="calc-button">9</button>
                    <button value="x" onClick={handleChangeOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button value="4" onClick={number} className="calc-button">4</button>
                    <button value="5" onClick={number} className="calc-button">5</button>
                    <button value="6" onClick={number} className="calc-button">6</button>
                    <button value="-" onClick={handleChangeOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button value="1" onClick={number} className="calc-button">1</button>
                    <button value="2" onClick={number} className="calc-button">2</button>
                    <button value="3" onClick={number} className="calc-button">3</button>
                    <button value="+" onClick={handleChangeOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button value="0" onClick={number} className="calc-button width-2">0</button>
                    <button value="decimal" onClick={decimal} className="calc-button">.</button>
                    <button value="=" onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
    // }
}

// export default Calculator