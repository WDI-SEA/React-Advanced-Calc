import React, { useState } from 'react'
const math = require('math')

const Calculator = props => {
    // Declare state variables
    //for function
    let [fun, setFun] = useState()
    //for number value
    let [num, setNum] = useState(0)
    let [num1, setNum1] = useState(0)
    //on selecting a function button, make num1 = num, let num=0, let fun = value of button
    //equals button and run values
    //error handling


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick= {() => { setNum(0); setFun(''); setNum1(0)}}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick= {() => {setFun('/'); setNum1(num); setNum(0)}}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick= {() => { setNum(7)}}>7</button>
                    <button className="calc-button" onClick= {() => { setNum(8)}}>8</button>
                    <button className="calc-button" onClick= {() => { setNum(9)}} >9</button>
                    <button className="calc-button calc-button-op" onClick={() => {setFun('*'); setNum1(num); setNum(0)}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick= {() => { setNum(4)}}>4</button>
                    <button className="calc-button" onClick= {() => { setNum(5)}}>5</button>
                    <button className="calc-button" onClick= {() => { setNum(6)}}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => {setFun('-'); setNum1(num); setNum(0)}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick= {() => { setNum(1)}}>1</button>
                    <button className="calc-button" onClick= {() => { setNum(2)}}>2</button>
                    <button className="calc-button" onClick= {() => { setNum(3)}}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => {setFun('+'); setNum1(num); setNum(0)}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick= {() => { setNum(0)}}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick= {() => { setNum( eval(+num1 +fun +num))}}>=</button>
                </div>
            </div>
            <h1>{fun}</h1>
            <h1>{num}</h1>
            <h1>{num1}</h1>
        </div>
    )
}

export default Calculator