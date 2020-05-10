import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [inputs, setInput] = useState([]);
    let [num, setNum] = useState('');
    let [ops, setOps] = useState('');
    let [equation, setEquation] = useState('')
    
    

    const inputNum = (value) => {
        setNum(num + value)
        setEquation(equation + value)

    }

    const inputOps = (value) => {
        console.log(value)
        setOps(value)
        inputs.push(num)
        inputs.push(value)
        console.log(inputs)
        setEquation(equation + value)
        setNum('')
    }

    const mult = (num1, num2) => {
        return parseInt(num1) * parseInt(num2)
    }
    const divide = (num1, num2) => {
        return parseInt(num1) / parseInt(num2)
    }
    const add = (num1, num2) => {
    return parseInt(num1) + parseInt(num2)
    }
    const sub = (num1, num2) => {
        return parseInt(num1) - parseInt(num2) 
    }

    const solve = () => {
        
        inputs.push(num)
        for (let i =0; i < inputs.length; i++)
            if (ops === '+') {
                (add(inputs[i-1], inputs[i+1]))
                
            }
    }

    const clearBtn = () => {
        setNum('')
        setInput([])
    }
    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{equation}</div>
                <div className="calc-row">
                {/* clear button(clear the state) */}
                    <button onClick={clearBtn}
                    className="calc-button calc-button-top">AC</button> 
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={() => { inputOps('/') }}
                    className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('7') }} 
                        className="calc-button">7</button>
                    <button onClick={() => { inputNum('8') }} 
                    className="calc-button">8</button>
                    <button onClick={() => { inputNum('9') }} 
                    className="calc-button">9</button>
                    <button onClick={() => { inputOps('*') }}
                    className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('4') }} 
                    className="calc-button">4</button>
                    <button onClick={() => { inputNum('5') }} 
                    className="calc-button">5</button>
                    <button onClick={() => { inputNum('6') }} 
                    className="calc-button">6</button>
                    <button onClick={() => { inputOps('-') }}
                    className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('1') }} 
                    className="calc-button">1</button>
                    <button onClick={() => { inputNum('2') }} 
                    className="calc-button">2</button>
                    <button onClick={() => { inputNum('3') }} 
                    className="calc-button">3</button>
                    <button onClick={() => { inputOps('+') }}
                    className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button  onClick={solve}
                    className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator