import React, { useState } from 'react'

const Calculator = () => {

    const [input, setInput] = useState([])
    const [negative, setNegative] = useState(false)
    const [operator, setOperator] = useState('')
    const [result, setResult] = useState('0')


    const addToInput = e => {
        let value = e.target.innerText 
        if (value !== "." && input.length <= 10) {
            setInput([...input, value])
            console.log(input)
        }
        else if (value === "." && !input.includes(".")) {
            setInput([...input, value])
        }
    }

    const clearInput = e => {
        setInput([])
        setOperator('')
    }

    const isNegative = e => {
        if (negative === false) {
            setNegative(true)
            setInput(["-", ...input])
        } else {
            setNegative(false)
            setInput(input.sliceI(1))
        }
    }

    const operatorClick = e => {
        setOperator(e.target.value)
        console.log(e.target.value)
    }

    const calculate = e => {
        let answer = ''
        let input1 = input[0]
        let input2 = input[1]
        if (operator === '+') {
            answer = Number(input1) + Number(input2)
        }            
        else if (operator === '-') {
            answer = Number(input1) - Number(input2)
        }            
        else if (operator === 'x') {
            answer = Number(input1) * Number(input2)
        }            
        else if (operator === '/') {
            answer = Number(input1) / Number(input2)
        }                    
        else if (operator === '%') {
            answer = Number(input1) % Number(input2)
        }            
        console.log(answer)         
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {input}   </p>
                <div className="answer-box"></div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={(e) => clearInput(e)}>AC</button>
                    <button className="calc-button calc-button-top" onClick={(e) => isNegative(e)}>+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={(e) => operatorClick(e)}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={(e) => operatorClick(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToInput(e)}>7</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>8</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>9</button>
                    <button className="calc-button calc-button-op" value="x" onClick={(e) => operatorClick(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToInput(e)}>4</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>5</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={(e) => operatorClick(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => addToInput(e)}>1</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>2</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={(e) => operatorClick(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => addToInput(e)}>0</button>
                    <button className="calc-button" onClick={(e) => addToInput(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={(e) => calculate(e)}>=</button>
                </div>
            </div>
            <p className="error"></p>
        </div>
    )
}

export default Calculator

