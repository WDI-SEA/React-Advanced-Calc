import React, { useState } from 'react'



const Calculator = props => { 
    // Declare state variables
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [results, setResults] = useState('0')
    let [operator,setOperator] = useState('')



    const handlePress = (e) => {
        if(e.target.value !== '0' || e.target.value !==''){
            setNum1(num1 + e.target.value)
        }
    }

    const operationPress = (e) => {
        setOperator(e.target.value)
        setNum2(num1)
        setNum1('')
    }

    const calculate = () => {
        let result = ''
        if(operator === '+') {
            result = (num1)+(num2)
        } 
        if (operator === '-') {
            result = (num1)-(num2)
        } 
        if (operator === '*') {
            result = (num1)*(num2)
        } 
        if (operator === '/') {
            result = (num1)/(num2)
        } 
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Value: </p>
                <div className="answer-box">{num1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"  >AC</button>
                    <button className="calc-button calc-button-top"  >+/-</button>
                    <button className="calc-button calc-button-top"  >%</button>
                    <button className="calc-button calc-button-op"  >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress} value='7'>7</button>
                    <button className="calc-button" onClick={handlePress} value='8'>8</button>
                    <button className="calc-button" onClick={handlePress} value='9'>9</button>
                    <button className="calc-button calc-button-op"  >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress} value='4'>4</button>
                    <button className="calc-button" onClick={handlePress} value='5'>5</button>
                    <button className="calc-button" onClick={handlePress} value='6'>6</button>
                    <button className="calc-button calc-button-op"  >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress} value='1'>1</button>
                    <button className="calc-button" onClick={handlePress} value='2'>2</button>
                    <button className="calc-button" onClick={handlePress} value='3'>3</button>
                    <button className="calc-button calc-button-op"  >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handlePress} value='0'>0</button>
                    <button className="calc-button" >.</button>
                    <button className="calc-button calc-button-op"  >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator