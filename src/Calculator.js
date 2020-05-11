import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [inputs, setInputs] = useState('');
    let [evaluation, setEvalutation] = useState('')
    
    const inputNum = (value) => {
        setInputs(inputs + value)
    }

    const inputOps = (value) => {
        console.log(value)
        setInputs(inputs + value)
        console.log(inputs)
    }

    const solve = () => {
        let evalNum = `${eval(inputs)}`
        setEvalutation(evalNum)
        setInputs('')
        console.log(evaluation)
    }

    const clearBtn = () => {    
        setInputs('')
        setEvalutation('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {evaluation} </p>
                <div className="answer-box">{inputs}{evaluation}</div>
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
                    <button onClick={() => { inputNum('0') }}
                    className="calc-button width-2">0</button>
                    <button onClick={() => { inputOps('.') }}
                    className="calc-button">.</button>
                    <button  onClick={solve}
                    className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator