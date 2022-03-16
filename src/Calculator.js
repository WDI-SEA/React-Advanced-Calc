import { useState } from 'react'
import React from 'react'

const Calculator = () => {
    // Declare state variables
    const [result, setResult] = useState('')
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operation, setOperation] = useState('')

    const handleNumber = (e) => {
        const temp = e.target.value
        // if (operation === null) {
        //     if (num1 === null) {
        //         setNum1(temp)
        //     } else setNum1(num1 + temp)
        // }
        // else {
        //     if (num2 === null) {
        //         setNum2(temp)
        //     } else setNum2(num2 + temp)
        // }

        if (num1 === null && temp != '0') {
            setNum1(temp)
        } else if (num1 != null) { setNum1(num1 + temp) }
    }

    const handleOperation = (e) => {
        setOperation(e.target.value)
        setNum2(num1)
        setNum1('')
    }
    const handleClear = () => {
        setNum1('')
        setNum2('')
        setOperation('')
        setResult('')
    }
    const calculate = () => {
        const temp1 = num1 * 1
        const temp2 = num2 * 1
        console.log(temp1)
        console.log('temp2', temp2)
        if (operation === 'add') {
            setResult(temp1 + temp2)
            setNum1('')
        } else if (operation === 'sub') {
            setResult(temp2 - temp1)
            setNum1('')
        } else if (operation === 'mul') {
            setResult(temp1 * temp2)
            setNum1('')
        } else if (operation === 'div') {
            setResult(temp2 / temp1)
            setNum1('')
        } else if (operation === 'modulo') {
            setResult(temp2 % temp1)
            setNum1('')
        }
    }

    const handleSign = () => {

    }

    const handlePercent = () => {
        const temp = num1
        setResult(temp / 100)
        setNum1('')

    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {num1 != null ? num1 : num2}</p>
                <div id='display' className="answer-box">{result}</div>
                <div className="calc-row">
                    <button onClick={handleClear} value='clear' id='AC' className="calc-button calc-button-top">AC</button>
                    <button onClick={handleSign} value='sign' id='sign' className="calc-button calc-button-top">+/-</button>
                    <button onClick={handleOperation} value='modulo' id='modulo' className="calc-button calc-button-top">%</button>
                    <button onClick={handleOperation} value='div' id='div' className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumber} value='7' id='num7' className="calc-button">7</button>
                    <button onClick={handleNumber} value='8' id='num8' className="calc-button">8</button>
                    <button onClick={handleNumber} value='9' id='num9' className="calc-button">9</button>
                    <button onClick={handleOperation} value='mul' id='mul' className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumber} value='4' id='num4' className="calc-button">4</button>
                    <button onClick={handleNumber} value='5' id='num5' className="calc-button">5</button>
                    <button onClick={handleNumber} value='6' id='num6' className="calc-button">6</button>
                    <button onClick={handleOperation} value='sub' id='sub' className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumber} value='1' id='num1' className="calc-button">1</button>
                    <button onClick={handleNumber} value='2' id='num2' className="calc-button">2</button>
                    <button onClick={handleNumber} value='3' id='num3' className="calc-button">3</button>
                    <button onClick={handleOperation} value='add' id='add' className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumber} value='0' id='num0' className="calc-button width-2">0</button>
                    <button onClick={handleNumber} value='.' id='decimal' className="calc-button">.</button>
                    <button onClick={calculate} value='submit' id='submit' className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator