import React, { useState } from 'react';

function Calculator() {
    // Declare state variables
    const [output, setOutput] = useState('')
    const [operator, setOperator] = useState('')
    const [firstNum, setFirstNum] = useState('0')
    const [secondNum, setSecondNum] = useState('')

    const clear = () => {
        return(
            setOutput(''),
            setFirstNum('0')
        )
    }
    
    const changeSign = () => {
        if(parseInt(output) > 0) {
            setOutput('-' + output)
        } else if(parseInt(output) < 0) {
            setOutput(output.slice(1))
        }
    }

    const numberInput = (e) => {
        if(!operator) {
            if(output === '0' && e.target.value === '0') {
    
            } else if(output === '0' && e.target.value !== '0') {
                setOutput(e.target.value)
            } else {
                setOutput(output + e.target.value)
            }
        } else if(!secondNum) { 
            setFirstNum(output)
            setOutput(e.target.value)
            setSecondNum(e.target.value)
            console.log(firstNum)
            console.log(secondNum)
        } else {
            if(output === '0' && e.target.value === '0') {
    
            } else if(output === '0' && e.target.value !== '0') {
                setOutput(e.target.value)
            } else {
                setOutput(output + e.target.value)
            }
            setSecondNum()
        }
    }

    const operatorInput = (e) => {
        if(!output) {
            setOutput('Please enter a number')
            setTimeout(() => setOutput(''), 1500)
        } else if(!operator || operator === '=') {
            setFirstNum(output)
            setOperator(e.target.value)
        } else {
            setOutput('Operator already chosen')
            setTimeout(() => setOutput(firstNum), 1500)
        }
    }

    const totalOutput = () => {
        if(operator === '+') {
            setOutput(parseInt(firstNum) + parseInt(secondNum))
        } else if(operator === '-') {
            setOutput(parseInt(firstNum) - parseInt(secondNum))
        } else if(operator === '/') {
            setOutput(parseInt(firstNum) / parseInt(secondNum))
        } else if(operator === '*') {
            setOutput(parseInt(firstNum) * parseInt(secondNum))
        }
        setOperator('=')
        setSecondNum('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{output}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={changeSign}>+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberInput} value='7'>7</button>
                    <button className="calc-button" onClick={numberInput} value='8'>8</button>
                    <button className="calc-button" onClick={numberInput} value='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberInput} value='4'>4</button>
                    <button className="calc-button" onClick={numberInput} value='5'>5</button>
                    <button className="calc-button" onClick={numberInput} value='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberInput} value='1'>1</button>
                    <button className="calc-button" onClick={numberInput} value='2'>2</button>
                    <button className="calc-button" onClick={numberInput} value='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={operatorInput} value='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numberInput} value='0'>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={totalOutput} value='='>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator