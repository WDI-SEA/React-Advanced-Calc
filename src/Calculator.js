import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p> {props.num} {props.operator} </p> 
                <div className="answer-box">{props.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={() => props.clear()}>AC</button>
                    <button className="calc-button calc-button-top" onClick={props.handleOperator} value='+/-'>+/-</button>
                    <button className="calc-button calc-button-top" onClick={props.handleOperator} value='%'>%</button>
                    <button className="calc-button calc-button-op" onClick={props.handleOperator} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons} value='7'>7</button>
                    <button className="calc-button" onClick={props.handleButtons} value='8'>8</button>
                    <button className="calc-button" onClick={props.handleButtons} value='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={props.handleOperator} value='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons} value='4'>4</button>
                    <button className="calc-button" onClick={props.handleButtons} value='5'>5</button>
                    <button className="calc-button" onClick={props.handleButtons} value='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={props.handleOperator} value='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={props.handleButtons} value='1'>1</button>
                    <button className="calc-button" onClick={props.handleButtons} value='2'>2</button>
                    <button className="calc-button" onClick={props.handleButtons} value='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={props.handleOperator} value='+'>+</button>
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