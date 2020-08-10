import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    const [formula, setFormula] = useState("")

    const handleClick = (e) => {
        console.log(e.target.name)
        setFormula(`${[...formula]}${e.target.name}`)
    }

    const handleClear = (e) => {
        setFormula("")
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{formula}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleClear} name="clear">AC</button>
                    <button className="calc-button calc-button-top" onClick={handleClick} name="-">+/-</button>
                    <button className="calc-button calc-button-top" onClick={handleClick} name="%">%</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} name="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} name="7">7</button>
                    <button className="calc-button" onClick={handleClick} name="8">8</button>
                    <button className="calc-button" onClick={handleClick} name="9">9</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} name="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} name="4">4</button>
                    <button className="calc-button" onClick={handleClick} name="5">5</button>
                    <button className="calc-button" onClick={handleClick} name="6">6</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} name="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleClick} name="1">1</button>
                    <button className="calc-button" onClick={handleClick} name="2">2</button>
                    <button className="calc-button" onClick={handleClick} name="3">3</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} name="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleClick} name="0">0</button>
                    <button className="calc-button" onClick={handleClick} name=".">.</button>
                    <button className="calc-button calc-button-op" onClick={handleClick} name="=">=</button>
                </div> 
            </div>
        </div>
    )
}

export default Calculator