import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [equation, setEquation] = useState('')
    let [display, setDisplay] = useState(0)
    let [result, setResult] = useState(0)

    const handleClick = e => {
        let x = e.target
        //if a click's value is between 0-9, add to the equation string
        if (x.value.match(/[0-9]/)) {
            console.log("VALUE IS", x.value)
            setEquation(equation += x.value)
            console.log("EQUATION is----", equation)
            setDisplay(equation)
        //if the click is an operator & the equation has been started, add the operators
        } else if (x.value.match(/[-+*\/]/) && (equation)) {
            //if the last letter was an operand, don't add selection to equation
            if (equation.charAt(equation.length -1).match(/[-+*\/]/)){
                console.log("invalid equation")
            } else {
                setEquation(equation += x.value)
                console.log('NEW EQUATION WHATT', equation)
            }    
        } else if (x.value === "="){
            setResult(eval(equation))
            console.log("WHAT BEAUTIFUL RESUTLS---", equation, result)
        //clear equation and display
        } else if (x.value === 'AC') {
            setEquation('')
            setDisplay(0)
            setResult(0)
            console.log("EVERYTHING CLEARED=== ", equation)
        }
        return display
    }
    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                    <p>{equation || "Let's math"}</p>
            <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value="AC" onClick={handleClick}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleClick}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleClick}>7</button>
                    <button className="calc-button" value="8" onClick={handleClick}>8</button>
                    <button className="calc-button" value="9" onClick={handleClick}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={handleClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleClick}>4</button>
                    <button className="calc-button" value="5" onClick={handleClick}>5</button>
                    <button className="calc-button" value="6" onClick={handleClick}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleClick}>1</button>
                    <button className="calc-button" value="2" onClick={handleClick}>2</button>
                    <button className="calc-button" value="3" onClick={handleClick}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleClick} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={handleClick}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" value="=" onClick={handleClick}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator