import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [num, setNum] = useState({
        num1: null,
        display: "",
        operator: ""
    })

    function selectNum(e) {
        e.preventDefault();
        let newNum = e.target.innerText
        console.log(newNum)
        setNum({
            display: num.display + newNum
        })
        console.log(num.display)
    }

    function selectOp(e) {
        e.preventDefault();
        let newOp = e.target.innerText
        setNum({
            num1: num.display,
            operator: newOp
        })
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>7</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>8</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>4</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>5</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>6</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>1</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>2</button>
                    <button className="calc-button" onClick={(e) => {selectNum(e);}}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>+</button>
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