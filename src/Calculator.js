import React from 'react'
import { useState } from 'react'

export default function Calculator() {
    // Declare state variables

        const [result, setResult] = useState(0)
        const [number, setNumber] = useState('')
        const [operator, setOperator] = useState('')
        
    
        const handleReset = () => {
            setNumber('')
            setResult(0)
            setOperator('')         
        }
    
        const handleNumberPress = (e) => {
            if (number === null) {
                setNumber(e.target.value)
            } else {
                setNumber(number + e.target.value)
            }
        }
    
        const handleOperator = (e) => {
            setOperator(e.target.value)
            setResult(Number(number))
            setNumber('')                        
        }
    
        const handleSignChange = () => {
            setNumber(number * -1)            
        }
    
        const calculate = async () => {
         
            setNumber(Number(number))
            
            if(operator === '+') {                
                setNumber(result + Number(number))
            }else if(operator === '-') {
                setNumber(result - Number(number))
            }else if(operator === 'x') {
                setNumber(result * Number(number))
            }else if(operator === '/') {
                setNumber(result / Number(number))
            }else {
                setNumber('error')
            }
        }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{number}</div>                
                <div className="calc-row">                    
                    <button onClick={handleReset} className="calc-button calc-button-top">AC</button>
                    <button onClick={handleSignChange} className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>                    
                    <button onClick={handleOperator} className="calc-button calc-button-op" value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleNumberPress} className="calc-button" value='7'>7</button>
                    <button onClick={handleNumberPress} className="calc-button" value='8'>8</button>
                    <button onClick={handleNumberPress} className="calc-button" value='9'>9</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op" value='x'>x</button>
                </div>
                <div className="calc-row">                    
                    <button onClick={handleNumberPress} className="calc-button" value='4'>4</button>
                    <button onClick={handleNumberPress} className="calc-button" value='5'>5</button>
                    <button onClick={handleNumberPress} className="calc-button" value='6'>6</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op" value='-'>-</button>
                </div>
                <div className="calc-row">                    
                    <button onClick={handleNumberPress} className="calc-button" value='1'>1</button>
                    <button onClick={handleNumberPress} className="calc-button" value='2'>2</button>
                    <button onClick={handleNumberPress} className="calc-button" value='3'>3</button>
                    <button onClick={handleOperator} className="calc-button calc-button-op" value='+'>+</button>
                </div>
                <div className="calc-row">                    
                    <button onClick={handleNumberPress} className="calc-button width-2" value='0'>0</button>
                    <button className="calc-button">.</button>                    
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}


