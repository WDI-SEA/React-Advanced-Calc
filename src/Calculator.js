import { useState } from "react";
import React from 'react';

export default function Calculator() {
    // state
    let [total, setTotal] = useState(0)
    let [num, setNum] = useState(null)
    let [operator, setOperator] = useState(null)

    const clearCalc = () => {
        setNum(null)
        setTotal(0)
        setOperator(null)
    }

    const handleNum = (e) => {
        console.log(e.target.innerText)
        // update the calc inner text

        if (num === null) {
            setNum(e.target.innerText)
        } else {
            setNum(num + e.target.innerText)
        }
    }

    const handleOperator = (e) => {
        setOperator(e.target.innerText)
        setTotal(Number(num))
        setNum(null)
    }

    const changeSign = () => {
        setNum(num * -1)
    }

    const calculate = async () => {
        setNum(Number(num))
        let operation = 0
        switch (operator) {
            case '+':
                operation = total + Number(num)
                break
            case '-':
                operation = total - num
                break
            case 'x':
                operation = total * num
                break
            case '/':
                operation = total / num
                break
            default:
                console.log("Messed up the math")
                break
        }
        setNum(operation)
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num}</div>
                <div className="calc-row">
                    <button onClick={clearCalc} className="calc-button calc-button-top">AC</button>
                    <button onClick={changeSign} className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNum} className="calc-button">7</button>
                    <button onClick={handleNum} className="calc-button">8</button>
                    <button onClick={handleNum} className="calc-button">9</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNum} className="calc-button">4</button>
                    <button onClick={handleNum} className="calc-button">5</button>
                    <button onClick={handleNum} className="calc-button">6</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNum} className="calc-button">1</button>
                    <button onClick={handleNum} className="calc-button">2</button>
                    <button onClick={handleNum} className="calc-button">3</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNum} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
