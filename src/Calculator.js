import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [value, setValue] = useState("0") //number you are entering in
    const [operator, setOperator] = useState(" ") // + ,-, % etc
    const [calculate, setCalculate] = useState(false) //math part
    const [result, setResult] = useState("0") //result of calculate

    //setup functions
    function setNum(e) {
        let tempNum = value //setting first number to a value
        if(e.target.value === tempNum && tempNum === ".") {
        } else {
            if(calculate) {
                setCalculate(false)
                setResult(value)
                let newValue = `${e.target.value}` //value is what you put in
                setValue(newValue)
            } else {
                if (value === "0") {
                    let newValue = `${e.target.value}`
                    setValue(newValue)
                } else {
                    let newValue = `${value}${e.target.value}`
                    setValue(newValue)
                }
            }
        }
    }

    function operation(e){
        setCalculate(true)
        let newOperator = e.target.value
        setOperator(newOperator)
    }

    function clearAll(){
        setValue(0)
        setOperator(" ")
        setResult(0)
    }

    // when you press = sign
    function calculateResults (){
        setCalculate(true)
        let num1 = Number(result)
        let num2 = Number(value)
        let op = operator
        
        if (op === "+") {
            let newResult = num1 + num2
            setResult(newResult)
            setValue(newResult)
          } else if (op === "-") {
            let newResult = num1 - num2
            setResult(newResult)
            setValue(newResult)
          } else if (op === "*") {
            let newResult = num1 * num2
            setResult(newResult)
            setValue(newResult)
          } else if (op === "/") {
            let newResult = num1 / num2
            setResult(newResult)
            setValue(newResult)
          } else if (op === "%") {
            let newResult = num1 % num2
            setResult(newResult)
            setValue(newResult)
          }
    }

    function togglePlusMinus(){
        let neg = -value
        setValue(neg)
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
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