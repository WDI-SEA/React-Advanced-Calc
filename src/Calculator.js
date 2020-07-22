import React, { useState, useEffect } from 'react'

const Calculator = props => {
    const [display, setDisplay] = useState(0)
    const [numOne, setNumOne] = useState(0)
    const [numTwo, setNumTwo] = useState(0)
    const [operator, setOperator] = useState()
    const [message, setMessage] = useState('')

    useEffect(() => {
        let answer
        if (operator === '+') {
            answer = parseInt(numOne) + parseInt(numTwo)
            setDisplay(answer)
        }
        if (operator === '-') {
            answer = parseInt(numOne) - parseInt(numTwo)
            setDisplay(answer)
        }
        if (operator === 'x') {
            answer = parseInt(numOne) * parseInt(numTwo)
            setDisplay(answer)
        }
        if (operator === '/') {
            answer = parseInt(numOne) / parseInt(numTwo)
            setDisplay(answer)
        }
        setMessage('')
    }, [numTwo])

    const numClick = (e) => {
        if (display > 0) {
            setDisplay(display + e.target.textContent)
        } else {
            setDisplay(e.target.textContent)
        }
    }

    const operatorClick = (e) => {
        if (!operator) {
            setNumOne(display)
            setDisplay(0)
            setOperator(e.target.textContent)
        } else {
            setMessage('Two operators? Nonsense.')
        }
    }

    const runOperation = () => {
        setNumTwo(display)
    }

    const clearButton = () => {
        setNumOne(0)
        setNumTwo(0)
        setOperator()
        setDisplay(0)
        setMessage('')
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearButton}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={operatorClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick}>7</button>
                    <button className="calc-button" onClick={numClick}>8</button>
                    <button className="calc-button" onClick={numClick}>9</button>
                    <button className="calc-button calc-button-op" onClick={operatorClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick}>4</button>
                    <button className="calc-button" onClick={numClick}>5</button>
                    <button className="calc-button" onClick={numClick}>6</button>
                    <button className="calc-button calc-button-op" onClick={operatorClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick}>1</button>
                    <button className="calc-button" onClick={numClick}>2</button>
                    <button className="calc-button" onClick={numClick}>3</button>
                    <button className="calc-button calc-button-op" onClick={operatorClick}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numClick}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={runOperation}>=</button>
                </div>
            </div>
            <div>{message}</div>
        </div>
    )
}

export default Calculator