import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{props.input}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={addSubtract}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={operatorSelect} value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={operatorSelect} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberSelect} value="7">7</button>
                    <button className="calc-button" onClick={numberSelect} value="8">8</button>
                    <button className="calc-button" onClick={numberSelect} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorSelect} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberSelect} value="4">4</button>
                    <button className="calc-button" onClick={numberSelect} value="5">5</button>
                    <button className="calc-button" onClick={numberSelect} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorSelect} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberSelect} value="1">1</button>
                    <button className="calc-button" onClick={numberSelect} value="2">2</button>
                    <button className="calc-button" onClick={numberSelect} value="3">3</button>
                    <button className="calc-button calc-button-op" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => props.addToCalc(e)} value="0">0</button>
                    <button className="calc-button" onClick={(e) => props.addToCalc(e)} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={calculate} value="=">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator