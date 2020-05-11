import React, { useState } from 'react'
import 'antd/dist/antd.css';
import {evaluate} from 'mathjs'
import {orange} from '@ant-design/colors'
import {Button} from 'antd'

const Calculator = props => {

    //sets and holds the operator value (+, -, *, /)
    let [operator, setoperator] = useState('')
    //sets and holds the current number input
    let [currentNum, setCurrentNum] = useState('')
    //sets and holds the string of previous inputs
    let [previousnum, setpreviousnum] = useState('')
    // Declare state variables
  


    //Handles the 0-9 key inputs
    const numInput = (e) => {
        //first if statement for controlling the 0 input
        if (!previousnum && !currentNum && e.target.value == '0') {

        // 2nd statement controls the length of the input field
            } else if (previousnum.length + currentNum.length > 7){
                setpreviousnum('')
                setCurrentNum('')
                setoperator('')
                console.log('error')

        // 3rd if statement checks for an operator
            } else if(operator) {
                setpreviousnum(previousnum + currentNum + operator)
                setCurrentNum(e.target.value)
                setoperator('')
        
        // if there are no operators continue concat to the currentNum
            } else {
                setCurrentNum(currentNum + e.target.value)
            }
    }
    
    //Handles the clear function which sets all states to null
    const clearBox = () => {
        console.log(operator)
        setoperator('')
        setpreviousnum('')
        setCurrentNum('')
    }


    //negative input function takes the current number and sets it negative/positive.
    const negInput = (e) => {
        if(!previousnum){
            setCurrentNum(currentNum * e.target.value)
        } else if (previousnum.includes('+') || previousnum.includes('-') || previousnum.includes('/') || previousnum.includes('*')) {
            setCurrentNum(currentNum * e.target.value)
        } else {
            setpreviousnum(previousnum * e.target.value)
        }
    }


    //this function takes current input concats it to a string then evaluates that string.
    const calcEval = () => {
        let evalnum = (previousnum + operator + currentNum)
        evalnum = `${eval(evalnum)}`
        console.log("evalnum is: ", evalnum)
        if(evalnum.length > 10){
             evalnum = evalnum.substr(0, 9)
        }
        setCurrentNum(`${evalnum}`)
        setpreviousnum('')
        setoperator('')
        console.log(operator)
    }


    // this function sets the operator input and
    const operInput = (e) => {
        if(!currentNum){
        } else if(operator){
            console.log("too many sequential operators")
        } else {
        setoperator(e.target.value)
        }
    }

    //sets the period for the input and checks to see if there is already a period in the input
    const periodInput = (e) => {
        if (!currentNum){
            setpreviousnum(0 + e.target.value)
        } else if (currentNum.includes(e.target.value)){
        } else if (currentNum && operator) {
        } else {
            setCurrentNum(currentNum + e.target.value)
        }
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{previousnum}|{currentNum}|{operator}</p>
                <div className="answer-box">{previousnum}{currentNum}{operator}</div>
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