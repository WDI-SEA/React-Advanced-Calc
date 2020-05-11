import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [operator, setOperator] = useState('')
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [answer, setAnswer] = useState('')
    let [display, setDisplay] = useState('')

    const allClear = () => {
        setOperator('')
        setNum1('')
        setNum2('')
        setDisplay('')
        setAnswer('')
        console.log('allClear has run')
    }

    const handleNumberClick = (e) => {
        if (operator) {
            let currentNum2 = num2.slice()
            setNum2(currentNum2 + e.target.value)
            console.log(num2)
        }
        else {
            let currentNum1 = num1.slice()
            setNum1(currentNum1 + e.target.value)
            console.log(num1)
        }
    }

    const handleOpClick = (e) => {
        if ( num1 && !operator && !num2 ) {
            setOperator(e.target.value)  
        }
        
        console.log(operator)
    }

    const calculate = () => {
        switch (operator){
            case '/':
                setAnswer(num1 / num2)
            break;
            case '*':
                setAnswer(num1 * num2)
            break;
            case '+':
                setAnswer(num1 + num2)
            break;
            case '-':
                setAnswer(num1 - num2)
            break;
            case '%':
                setAnswer(num1/100)
            break;
        }
        console.log(num1)
        console.log(num2)
        console.log(operator)
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="display">
                <p>{num1 || num2} {operator} {operator ? num2 : ''}</p>
                </div>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={allClear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" value={'%'} onClick={handleOpClick} >%</button>
                    <button className="calc-button calc-button-op" value={'/'} onClick={handleOpClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={handleNumberClick}>7</button>
                    <button className="calc-button" value={8} onClick={handleNumberClick}>8</button>
                    <button className="calc-button" value={9} onClick={handleNumberClick}>9</button>
                    <button className="calc-button calc-button-op" value={'*'} onClick={handleOpClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={4} onClick={handleNumberClick}>4</button>
                    <button className="calc-button" value={5} onClick={handleNumberClick}>5</button>
                    <button className="calc-button" value={6} onClick={handleNumberClick}>6</button>
                    <button className="calc-button calc-button-op" value={'-'} onClick={handleOpClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={1} onClick={handleNumberClick}>1</button>
                    <button className="calc-button" value={2} onClick={handleNumberClick}>2</button>
                    <button className="calc-button" value={3} onClick={handleNumberClick}>3</button>
                    <button className="calc-button calc-button-op" value={'+'} onClick={handleOpClick}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value={0} onClick={handleNumberClick}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator