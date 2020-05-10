import React, { useState } from 'react'
import 'antd/dist/antd.css';
import {evaluate} from 'mathjs'
import {orange} from '@ant-design/colors'
import {Button} from 'antd'

const Calculator = props => {
    let [currentnum, setcurrentnum] = useState('')
    let [previousnum, setpreviousnum] = useState('')
    // Declare state variables
    //stuff
    const numInput = (e) => {
        e.preventDefault()
        if (!currentnum && e.target.value == '0') {
        } else if (currentnum.length < 10){
        setcurrentnum(currentnum + e.target.value)
        } else 
            console.log("can't have zero first")
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
                {/* <p>{previousnum}|{currentnum}</p> */}
                <div className="answer-box">{previousnum}{currentnum}</div>
                <div className="calc-row">
                    <Button style={{ "background-color": "#8c8c8c", "color": "white" }} className="calc-button calc-button-top" onClick={clearBox}>AC</Button>
                    <Button style={{ "background-color": "#8c8c8c", "color": "white" }} className="calc-button calc-button-top" onClick={negInput} value="-1">+/-</Button>
                    <Button style={{ "background-color": "#8c8c8c", "color": "white" }} className="calc-button calc-button-top"onClick={operInput} value="%">%</Button>
                    <Button style={{ "background-color": "orange", "color": "white" }} className="calc-button calc-button-op"onClick={operInput} value="/">/</Button>
                </div>
                <div className="calc-row">
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button" onClick={numInput} value="7">7</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="8">8</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="9">9</Button>
                    <Button style={{ "background-color": "orange", "color": "white" }} className="calc-button calc-button-op"onClick={operInput} value="*">x</Button>
                </div>
                <div className="calc-row">
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="4">4</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="5">5</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="6">6</Button>
                    <Button style={{ "background-color": "orange", "color": "white" }} className="calc-button calc-button-op" onClick={operInput} value="-">-</Button>
                </div>
                <div className="calc-row">
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="1">1</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="2">2</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button"onClick={numInput} value="3">3</Button>
                    <Button style={{ "background-color": "orange", "color": "white" }} className="calc-button calc-button-op" onClick={operInput} value="+">+</Button>
                </div>
                <div className="calc-row">
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="@orange-6 calc-button width-2"onClick={numInput} value="0">0</Button>
                    <Button style={{ "background-color": "##f0f0f0", "color": "black" }} className="calc-button" onClick={periodInput} value=".">.</Button>
                    <Button style={{ "background-color": "orange", "color": "white" }} className="calc-button calc-button-op" onClick={calcEval}>=</Button>
                </div>
            </div>
        </div>
    )
}

export default Calculator