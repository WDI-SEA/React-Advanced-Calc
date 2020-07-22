import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [clear, setClear] = useState(true)
    let [number, setNumber] = useState('')
    let [operator, setOperator] = useState('')
    let [display, setDisplay] = useState('')

    const numClick = e => {
        if (e.target.value !== '0' || Number !== '') {
            setNumber(Number + e.target.value)
        }
    }


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
                    <button className="calc-button" onClick={numClick} value='7'>7</button>
                    <button className="calc-button" onClick={numClick} value='8'>8</button>
                    <button className="calc-button" onClick={numClick} value='9'>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick} value='4'>4</button>
                    <button className="calc-button" onClick={numClick} value='5'>5</button>
                    <button className="calc-button" onClick={numClick} value='6'>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numClick} value='1'>1</button>
                    <button className="calc-button" onClick={numClick} value='2'>2</button>
                    <button className="calc-button" onClick={numClick} value='3'>3</button>
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