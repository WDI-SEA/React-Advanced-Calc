import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{props.operator}Values: </p> 
                <div className="answer-box">{props.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={() => props.clear()}>AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons}>7</button>
                    <button className="calc-button" onClick={props.handleButtons}>8</button>
                    <button className="calc-button" onClick={props.handleButtons}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons}>4</button>
                    <button className="calc-button" onClick={props.handleButtons}>5</button>
                    <button className="calc-button" onClick={props.handleButtons}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons}>1</button>
                    <button className="calc-button" onClick={props.handleButtons}>2</button>
                    <button className="calc-button" onClick={props.handleButtons}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={props.handleButtons}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" 
                        onClick={() => props.formula()}>=</button>
                </div>
                    <p>{props.error}</p>
            </div>
        </div>
    )
}

export default Calculator