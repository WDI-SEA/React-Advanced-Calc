import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [displayValue, setDisplayValue] = useState(0)
    const allClear = () => {
        console.log(0)
        setDisplayValue(0)
    }
    const numberClickHandler = (e) => {
        console.log(e.target.innerText)

        let numberOnDisplay = displayValue
        numberOnDisplay += e.target.innerText
        setDisplayValue(parseFloat(numberOnDisplay))
        
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{displayValue}</div>
                <div className="calc-row">
                    <button onClick={allClear} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>

                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberClickHandler} className="calc-button">7</button>
                    <button onClick={numberClickHandler} className="calc-button">8</button>
                    <button onClick={numberClickHandler} className="calc-button">9</button>

                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberClickHandler} className="calc-button">4</button>
                    <button onClick={numberClickHandler} className="calc-button">5</button>
                    <button onClick={numberClickHandler} className="calc-button">6</button>

                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberClickHandler} className="calc-button">1</button>
                    <button onClick={numberClickHandler} className="calc-button">2</button>
                    <button onClick={numberClickHandler} className="calc-button">3</button>

                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberClickHandler} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>

                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator