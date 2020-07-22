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
                    <button className="calc-button calc-button-top"  onClick={(e) => props.clear(e)}>AC</button>
                    <button className="calc-button calc-button-top" onClick={(e) => props.isNegative(e)}>+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>7</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>8</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => props.calculate(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>4</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>5</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>1</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>2</button>
                    <button className="calc-button" onClick={(e) => props.addToInput(e)}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => props.addToInput(e)}>0</button>
                    <button className="calc-button"onClick={(e) => props.addToInput(e)}>.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator