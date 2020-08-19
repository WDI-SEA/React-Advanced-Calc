import React, { useState, useEffect } from 'react'

const Calculator = props => {

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{props.operator} {props.nextNum?props.nextNum:0}</p>
                <div className="answer-box">{props.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=>props.clear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>props.operate("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>props.operate("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>props.tackNum("7")}>7</button>
                    <button className="calc-button" onClick={()=>props.tackNum("8")}>8</button>
                    <button className="calc-button" onClick={()=>props.tackNum("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>props.operate("*")}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>props.tackNum("4")}>4</button>
                    <button className="calc-button" onClick={()=>props.tackNum("5")}>5</button>
                    <button className="calc-button" onClick={()=>props.tackNum("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=>props.operate("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>props.tackNum("1")}>1</button>
                    <button className="calc-button" onClick={()=>props.tackNum("2")}>2</button>
                    <button className="calc-button" onClick={()=>props.tackNum("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=>props.operate("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>props.tackNum("0")}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={()=>props.evaluate()}>=</button>
                </div>
                <div className="message">
                    <p>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculator