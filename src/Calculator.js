import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    //for function
    let [fun, setFun] = useState()
    //for number value
    let [num, setNum] = useState(0)
    let [num1, setNum1] = useState('')
    //on selecting a function button, make num1 = num, let num=0, let fun = value of button
    function funtimes(e){

    }
    //equals button and run values
    //error handling


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick= {() => { setNum(0); setFun();}}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button">3</button>
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