import React, { useState } from 'react'
import Operation from './Operation'
import Display from './Display'
import Button from './Button'


const Calculator = props => {
    // Declare state variables
    const [display , setDisplay] = useState(0)
    // const [operation, setOperation] = useState(new Operation())

    // const handleButtonClick = () => setHandleButtonClick

    const handleButtonClick = (event) => {
        // console.log(event.target.value)
        setDisplay(Operation.calculate(event.target.value))
    }
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box"><Display display={display} /></div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value="AC" onClick={handleButtonClick} >AC</button>
                    <button className="calc-button calc-button-top" value="+/-" onClick={handleButtonClick} >+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleButtonClick} >%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleButtonClick} >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleButtonClick} >7</button>
                    <button className="calc-button" value="8" onClick={handleButtonClick} >8</button>
                    <button className="calc-button" value="9" onClick={handleButtonClick} >9</button>
                    <button className="calc-button calc-button-op"value="x" onClick={handleButtonClick} >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleButtonClick} >4</button>
                    <button className="calc-button" value="5" onClick={handleButtonClick} >5</button>
                    <button className="calc-button" value="6" onClick={handleButtonClick} >6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleButtonClick} >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleButtonClick} >1</button>
                    <button className="calc-button" value="2" onClick={handleButtonClick} >2</button>
                    <button className="calc-button" value="3" onClick={handleButtonClick} >3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleButtonClick} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={handleButtonClick} >0</button>
                    <button className="calc-button" value="." onClick={handleButtonClick} >.</button>
                    <button className="calc-button calc-button-op" value="=" onClick={handleButtonClick} >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator