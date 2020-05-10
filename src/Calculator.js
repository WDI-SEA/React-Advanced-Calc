import React, { useState } from 'react'
import {evaluate} from 'mathjs'

const Calculator = props => {
    let [currentnum, setcurrentnum] = useState('')
    let [previousnum, setpreviousnum] = useState('')
    // Declare state variables
    //stuff
    const numInput = (e) => {
        e.preventDefault()
        if (currentnum.length < 10){
        setcurrentnum(currentnum + e.target.value)
        } else {
            console.log("too many numbers")
        }
        
    }
    const clearBox = () => {
        console.log(currentnum)
        setcurrentnum('')
        setpreviousnum('')
    }

    const negInput = (e) => {
        setcurrentnum(currentnum * e.target.value)
    }

    const calcEval = () => {
        let evalnum = (previousnum + currentnum)
        evalnum = `${eval(evalnum)}`
        console.log("evalnum is: ", evalnum)
        if(evalnum.length > 10){
             evalnum = evalnum.substr(0, 9)
        }
        setcurrentnum(`${evalnum}`)
        setpreviousnum('')
        console.log(currentnum)
    }

    const operInput = (e) => {
        setpreviousnum(previousnum + currentnum + e.target.value)
        setcurrentnum('')
    }

    const periodInput = (e) => {
        if (!currentnum){
            setcurrentnum(0 + e.target.value)
        } else if (currentnum.includes(e.target.value)){
        } else {
            setcurrentnum(currentnum + e.target.value)
        }
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{previousnum}|{currentnum}</p>
                <div className="answer-box">{previousnum}{currentnum}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearBox}>AC</button>
                    <button className="calc-button calc-button-top" onClick={negInput} value="-1">+/-</button>
                    <button className="calc-button calc-button-top"onClick={operInput} value="%">%</button>
                    <button className="calc-button calc-button-op"onClick={operInput} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numInput} value="7">7</button>
                    <button className="calc-button"onClick={numInput} value="8">8</button>
                    <button className="calc-button"onClick={numInput} value="9">9</button>
                    <button className="calc-button calc-button-op"onClick={operInput} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={numInput} value="4">4</button>
                    <button className="calc-button"onClick={numInput} value="5">5</button>
                    <button className="calc-button"onClick={numInput} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operInput} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={numInput} value="1">1</button>
                    <button className="calc-button"onClick={numInput} value="2">2</button>
                    <button className="calc-button"onClick={numInput} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operInput} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={numInput} value="0">0</button>
                    <button className="calc-button" onClick={periodInput} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={calcEval}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator