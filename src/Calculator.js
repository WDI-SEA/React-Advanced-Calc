import React, { useState } from 'react'
import './App.css'

const Calculator = (props) => {
    // Declare state variables
    let [answer, setAnswer] = useState('0') 
    let [currentNum, setCurrentNum] = useState('') 
    let [error, setError] = useState('') 
    let [num1, setNum1] = useState('') 
    let [operator, setOperator] = useState('') 

    // Handle setting the current value
    const numPress = (e) => {
        if (e.target.value !== '0' || currentNum !== '') {
            setCurrentNum(currentNum + e.target.value)
        }
    }

    // Handle decimal point
    const dot = () => {
        if (!currentNum) {
        setCurrentNum('0.')
    }
        else if (currentNum.indexOf('.') === -1) {
            setCurrentNum(currentNum + '.')
        }
    }

    // Plus/Minus button
    const pm = () => {
        console.log('plus/minus')
    }

    // Handle operator
    const operatorPress = (e) => {
        if (operator) {
            setError('Operator has already been set. Press clear to reset.')
        }
        else if (!currentNum && e.target.value === '-') {
                setError('')
                setCurrentNum(e.target.value)
        }
        else if (!currentNum) {
                setError('A numerical value must be set first')
            }
        else {
            setNum1(currentNum)
            setOperator(e.target.value)
            setError('')
            setCurrentNum('')
        }
    }

    const calculate = (e) => {
        e.preventDefault()

        if(!num1 || !operator) {
            setError('Please enter a valid expression')
        }
        else if(!currentNum) {
            setError('Please select a second number')
        }
        else {
            //Ideal case
            var answer = ''

            if(!operator || operator === '+') {
                answer = (Number(num1) + Number(currentNum)).toString()
            }
            else if(operator === '-') {
                answer = (Number(num1) - Number(currentNum)).toString()
            }
            else if(operator === '*') {
            answer = (Number(num1) * Number(currentNum)).toString()
            }
            else if(operator === '/') {
            answer = (Number(num1) / Number(currentNum)).toString()
            }
            else if(operator === '%') {
            answer = (Number(num1) % Number(currentNum)).toString()
            }

            //Set the answer to display
            let newAnswer = answer.slice(0, 10)

            // Update state
            setAnswer(newAnswer)
            setError('')
        }
    }

    const clear = () => {
    setAnswer('0')
    setCurrentNum('')
    setError('')
    setNum1('')
    setOperator('')
    }

    return (
        <div className="container">
            <h1>Calculator with React!</h1>
            <div className="calc-container">
                <p>Values: {num1 || currentNum} {operator} {operator ? currentNum : ''}</p>
                <div className="answer-box">{answer}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={clear}>C</button>
                        <button className="calc-button calc-button-top" onClick={pm} value="pm">+/-</button>
                        <button className="calc-button calc-button-top" onClick={operatorPress} value='%'>%</button>
                        <button className="calc-button calc-button-op" onClick={operatorPress} value='/'>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={numPress} value="7">7</button>
                        <button className="calc-button" onClick={numPress} value="8">8</button>
                        <button className="calc-button" onClick={numPress} value="9">9</button>
                        <button className="calc-button calc-button-op" onClick={operatorPress} value="*">x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={numPress} value="4">4</button>
                        <button className="calc-button" onClick={numPress} value="5">5</button>
                        <button className="calc-button" onClick={numPress} value="6">6</button>
                        <button className="calc-button calc-button-op" onClick={operatorPress} value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={numPress} value="1">1</button>
                        <button className="calc-button" onClick={numPress} value="2">2</button>
                        <button className="calc-button" onClick={numPress} value="3">3</button>
                        <button className="calc-button calc-button-op" onClick={operatorPress} value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={numPress} value="0">0</button>
                        <button className="calc-button" onClick={dot}>.</button>
                        <button className="calc-button calc-button-op" onClick={calculate}>=</button>
                    </div>
                </div>
            <p className="error">{error}</p>
        </div>
    )
}

export default Calculator