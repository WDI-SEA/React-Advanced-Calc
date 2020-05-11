import React, { useState } from 'react'

const Calculator = props => {
    const [num, setNum] = useState([])
    const [op, setOp] = useState('')
    const [display, setDisplay] = useState(0)

   
    

    const addInput = (e) => {
        let newNum = e.target.innerText;
        if(display === 0) {
            setDisplay(newNum)
        }
         else {
            let newDisplay = display + newNum
            setDisplay(newDisplay)
        }
        setNum([...num, newNum]) 
    }

    const addOp = (e) => {
        let operator = e.target.innerText
        setOp(operator)
    }

    
    const result = (e) => {
       
        if(op === '+') {
            let result = parseInt(num) + parseInt(num)
             setDisplay(result)
        } else if(op === '-') {
            let result = parseInt(num) - parseInt(num)
            setDisplay(result)
    
        } else if(op === 'x') {
            let result = parseInt(num) * parseInt(num)
            setDisplay(result)
           
        } else if(op === '/') {
            let result = parseInt(num) / parseInt(num)
            setDisplay(result)
           
        } else if(op === '%') {
            let result = parseInt(num) % parseInt(num)
            setDisplay(result)
        } 
    }

    const neg = (e) => {
       let negNum = num * -1
       setDisplay(negNum)

    }

    return (
<div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="answer-box"><span className="answer">{display}</span></div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top" onClick={ neg}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={addOp}>%</button>
                    <button className="calc-button calc-button-op" onClick={addOp}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>7</button>
                    <button className="calc-button" onClick={addInput}>8</button>
                    <button className="calc-button" onClick={addInput}>9</button>
                    <button className="calc-button calc-button-op" onClick={addOp}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>4</button>
                    <button className="calc-button" onClick={addInput}>5</button>
                    <button className="calc-button" onClick={addInput}>6</button>
                    <button className="calc-button calc-button-op" onClick={addOp}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={addInput}>1</button>
                    <button className="calc-button" onClick={addInput}>2</button>
                    <button className="calc-button" onClick={addInput}>3</button>
                    <button className="calc-button calc-button-op" onClick={addOp}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={addInput}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={result}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator