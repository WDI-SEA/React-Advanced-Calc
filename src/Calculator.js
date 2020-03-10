import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [operation, setOperation] = useState('')
    const [inputs, setInputs] = useState([])
    const [display, setDisplay] = useState(0)
    const [resetDisplay, setResetDisplay] = useState(false)

    const addInput = (e) => {
        let newNum = e.target.innerText;

        //console.log(newNum);
        if(display === 0) {
            setDisplay(newNum)
        } else if (resetDisplay === true){
            setDisplay(newNum)
            setResetDisplay(false)
        } else {
            let newDisplay = display + newNum
            setDisplay(newDisplay)
        }
        setInputs([...inputs, newNum]) 
    }
    const clearInputs = (e) => {
        setInputs([])  
        clearDisplay()
    }
    const clearDisplay = () => {
        setDisplay(0)
    }
    const addOperation = (e) => {
        let operator = e.target.innerText
        setOperation(operator)
        let combine = ''
        for(let i = 0; i < inputs.length; i++){
            combine += inputs[i]
        }
        console.log(combine)
        setInputs([combine])
        setResetDisplay(true)

    }
    const calcResult = (e) => {
        let result = 0
        let second = ''
        for(let i = 1; i < inputs.length; i++) {
            second += inputs[i];
        }
        console.log(second)
        
        console.log(inputs)
        if(operation === '+') {
            result = parseInt(inputs[0]) + parseInt(second)
            setDisplay(result)
            setInputs([])
            setInputs([result])
        } else if(operation === '-') {
            result = parseInt(inputs[0]) - parseInt(second)
            setDisplay(result)
            setInputs([])
            setInputs([result])
        } else if(operation === 'x') {
            result = parseInt(inputs[0]) * parseInt(second)
            setDisplay(result)
            setInputs([])
            setInputs([result])
        } else if(operation === '/') {
            result = parseInt(inputs[0]) / parseInt(second)
            setDisplay(result)
            setInputs([])
            setInputs([result])
        } else if(operation === '%') {
            result = parseInt(inputs[0]) % parseInt(second)
            setDisplay(result)
            setInputs([])
            setInputs([result])
        } else {
            console.log("Incorrect input");
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="answer-box"><span className="answer">{display}</span></div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearInputs}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={addOperation}>%</button>
                    <button className="calc-button calc-button-op" onClick={addOperation}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>7</button>
                    <button className="calc-button" onClick={addInput}>8</button>
                    <button className="calc-button" onClick={addInput}>9</button>
                    <button className="calc-button calc-button-op" onClick={addOperation}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>4</button>
                    <button className="calc-button" onClick={addInput}>5</button>
                    <button className="calc-button" onClick={addInput}>6</button>
                    <button className="calc-button calc-button-op" onClick={addOperation}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>1</button>
                    <button className="calc-button" onClick={addInput}>2</button>
                    <button className="calc-button" onClick={addInput}>3</button>
                    <button className="calc-button calc-button-op" onClick={addOperation}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={addInput}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={calcResult}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator