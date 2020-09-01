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
                {value}
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearAll}>AC</button>
                    <button className="calc-button calc-button-top" onClick={togglePlusMinus} >+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={operation}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={operation}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={setNum}>7</button>
                    <button className="calc-button" value={8} onClick={setNum}>8</button>
                    <button className="calc-button" value={9} onClick={setNum}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={operation}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={4} onClick={setNum}>4</button>
                    <button className="calc-button" value={5} onClick={setNum}>5</button>
                    <button className="calc-button" value={6} onClick={setNum}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={operation}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={1} onClick={setNum}>1</button>
                    <button className="calc-button" value={2} onClick={setNum}>2</button>
                    <button className="calc-button" value={3} onClick={setNum}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={operation}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={setNum}>0</button>
                    <button className="calc-button" value='.' onClick={setNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={calculateResults}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
