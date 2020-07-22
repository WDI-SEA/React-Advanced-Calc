import React, { useState, useEffect } from 'react'

const Calculator = props => {
    // Declare state variables
    const [display, setDisplay] = useState(0)
    const [numA, setNumA] = useState(0)
    const [numB, setNumB] = useState(0)
    const [operator, setOperator] = useState()

    useEffect(() => {
        let answer
        if (operator === '+') {
            answer = parseInt(numA) + parseInt(numB)
            console.log(`Answer: ${answer}`)
            setDisplay(answer)
        }
        if (operator === '-') {
            answer = parseInt(numA) - parseInt(numB)
            console.log(`Answer: ${answer}`)
            setDisplay(answer)
        }
        if (operator === 'x') {
            answer = parseInt(numA) * parseInt(numB)
            console.log(`Answer: ${answer}`)
            setDisplay(answer)
        }
        if (operator === '/') {
            answer = parseInt(numA) / parseInt(numB)
            console.log(`Answer: ${answer}`)
            setDisplay(answer)
        }
    }, [numB])

    const addToDisplay = (e) => {
        if (display > 0){
            setDisplay(display + e.target.innerText)
        } else {
            setDisplay(e.target.innerText)
        }
    }

    const handleOperator = (e) => {
        setNumA(display)
        setDisplay(0)
        setOperator(e.target.innerText)
    }

    const clearDisplay = () => {
        setDisplay(0)
        setNumA(0)
        setNumB(0)
        setOperator()
    }

    const findSum = () => {
        setNumB(display)
    }

    const isNegative = () => {
        setDisplay(display * -1)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearDisplay}>AC</button>
                    <button className="calc-button calc-button-top" onClick={(e) => isNegative(e)}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={(e) => handleOperator(e)}>%</button>
                    <button className="calc-button calc-button-op" onClick={(e) => handleOperator(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>7</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>8</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => handleOperator(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>4</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>5</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>6</button>
                    <button className="calc-button calc-button-op" onClick={(e) => handleOperator(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>1</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>2</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => handleOperator(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => addToDisplay(e)}>0</button>
                    <button className="calc-button" onClick={(e) => addToDisplay(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={findSum}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator