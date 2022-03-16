import React, { useState, useEffect } from 'react'

function Calculator () {
    // Declare state variables
    const [operator, setOperator] = useState('')
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    // const [answer, setAnswer] = useState('')
    const [answer, setAnswer] = useState('')
    const [display, setDisplay] = useState('')

    useEffect(()=>{
        setDisplay(num1)
    },[num1])
    useEffect(()=>{
        setDisplay(num1+operator)
    },[num1,operator])
    useEffect(()=>{
        setDisplay(num2)
    },[num2])
    useEffect(()=>{
        setDisplay(answer)
    },[answer])

    const clear = () => {
        setOperator('')
        setNum1('')
        setNum2('')
        setDisplay('')
        setAnswer('')
    }

    const numClick = (e) => {
        if(answer || answer === 0) {
            clear()
        } else if (!operator) {
            if (e.target.innerText !== '0') {
                setNum1(num1+e.target.innerText)
            } else if (e.target.innerText === '0' && num1 !== '') {
                setNum1(num1+e.target.innerText)
            }
        } else if (e.target.innerText !== '0') {
            if (e.target.innerText !== '0') {
                setNum2(num2+e.target.innerText)
            } else if (e.target.innerText === '0' && num2 !== '') {
                setNum2(num2+e.target.innerText)
            }
        }
    }

    const setOp = (e) => {
        if(num1 && !num2 && !answer){
            setOperator(e.target.value)
        }
        if(answer || answer === 0) {
            setNum1(answer)
            setAnswer('')
            setOperator(e.target.value)
            setNum2('')

        }
    }

    const calculate = () => {
        if(num2) {
            setAnswer(eval(num1+operator+num2))
        }
    }

    const signChange = () => {
        if(num2) {
            setNum2(num2*-1)
        } else if (!operator) {
            setNum1(num1*-1)
        }
    }

    // if (e.target.innerText === '.' && num1 === '') {
    //     setNum1('0.')
    // } else if (e.target.innerText === '.' && num1.indexOf('.') === -1) {
    //     setNum1(num1+'.')

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={signChange} className="calc-button calc-button-top">+/-</button>
                    <button onClick={setOp} className="calc-button calc-button-top" value="%">%</button>
                    <button onClick={setOp} className="calc-button calc-button-op" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button">7</button>
                    <button onClick={numClick} className="calc-button">8</button>
                    <button onClick={numClick} className="calc-button">9</button>
                    <button onClick={setOp} className="calc-button calc-button-op" value="*">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button">4</button>
                    <button onClick={numClick} className="calc-button">5</button>
                    <button onClick={numClick} className="calc-button">6</button>
                    <button onClick={setOp} className="calc-button calc-button-op" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button">1</button>
                    <button onClick={numClick} className="calc-button">2</button>
                    <button onClick={numClick} className="calc-button">3</button>
                    <button onClick={setOp} className="calc-button calc-button-op" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numClick} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator