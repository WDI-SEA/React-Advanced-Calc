import React, { useState } from 'react'

const Calculator = props => {
    const [firstNumber, setFirstNumber] = useState() 
    const [secondNumber, setSecondNumber] = useState()
    const [operator, setOperator] = useState()

            let numberOptions = document.getElementsByClassName("calc-button").value
            let operatorOptions = document.getElementsByClassName("calc-button-op").value
    

        const setNumbers = (e) => {
            if (firstNumber === null) {
                firstNumber = e.target.innerText
                setFirstNumber(firstNumber)
            }else if (firstNumber !== null) {
                secondNumber = e.target.innerText
                setSecondNumber(secondNumber)
        }

        const setOperator = (e) => {
            operator = e.target.innerText
            setOperator(operator)
        }
   
        const findNumbers = numberOptions.useEventListener("click", setNumbers)
        const findOperator = operatorOptions.useEventListener("click", setOperator)

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={ (e) => solveEquation()} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator