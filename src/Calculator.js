import React, { useState } from 'react'


export default function Calculator ({inputHandler,value}) {
    // Declare state variables
    const [answer, setAnswer] = useState(0)
    const [currentValue, setcurrentValue] = useState('')
    const [operator, setOperator] = useState('')
    const [firstNum, setFirstNum] = useState('')

    const numInput = e => {
        console.log(`numInput firing on ${e.target.value}`)
        setcurrentValue(currentValue + e.target.value)
    }

    const operatorInput = e => {
        console.log(`operatorInput firing on ${e.target.value}`)
        if(!operator){
            setOperator(e.target.value)
            setFirstNum(currentValue)
            setcurrentValue('')
        }else{
            console.log(`operator is already set`)
        }
    }

    const clearAll = () => {
        console.log('clearing all state vars')
        setcurrentValue('')
        setOperator('')
        setFirstNum('')
        setAnswer('')
    }

    const doMath = () =>{
        console.log('doing math now')
        if(operator === "+"){
            console.log(`addition total: ${parseInt(firstNum) + parseInt(currentValue)}`)
            setAnswer(parseInt(firstNum) + parseInt(currentValue))
        }
        if(operator === "-"){
            console.log('subtraction')
            setAnswer(parseInt(firstNum) - parseInt(currentValue))
        }
        if(operator === "*"){
            console.log('mult')
            setAnswer(parseInt(firstNum) * parseInt(currentValue))
        }
        if(operator === "/"){
            console.log('divide')
            setAnswer(parseInt(firstNum) / parseInt(currentValue))
        }
        // reset all state vars
        setcurrentValue('')
        setOperator('')
        setFirstNum('')
        // clearAll()
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {currentValue}</p>
                <div className="answer-box">{answer}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearAll}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numInput} value="7">7</button>
                    <button className="calc-button" onClick={numInput} value="8">8</button>
                    <button className="calc-button" onClick={numInput} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numInput} value="4">4</button>
                    <button className="calc-button" onClick={numInput} value="5">5</button>
                    <button className="calc-button" onClick={numInput} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numInput} value="1">1</button>
                    <button className="calc-button" onClick={numInput} value="2">2</button>
                    <button className="calc-button" onClick={numInput} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numInput}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={doMath}>=</button>
                </div>
            </div>
        </div>
    )
}