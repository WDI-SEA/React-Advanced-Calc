import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [displayValue, setDisplayValue] = useState(0)
    let [firstValue, setFirstValue] = useState(0)
    let [secondValue, setSecondValue] = useState(0)
    
    let [numberOnDisplay, setNumberOnDisplay] = useState(false)

    let [operator, setOperator] = useState('')

    const allClear = () => {
        console.log(`allClear, displaying: 0`)
        setDisplayValue(0)
        setOperator('')
        setFirstValue(0)
        setSecondValue(0)
        setNumberOnDisplay(false)
    }

    const numberClickHandler = (e) => {
        console.log(`Number clicked: ${e.target.innerText}`)

        if (!numberOnDisplay) {
            setFirstValue(parseFloat(firstValue += e.target.innerText))
            setDisplayValue(parseFloat(firstValue))
        } else if (numberOnDisplay) {
            setSecondValue(parseFloat(secondValue += e.target.innerText))
            setDisplayValue(parseFloat(secondValue))
        }
    }
    
    const operatorClickHandler = (e) => {
        setNumberOnDisplay(true)
        setOperator(e.target.innerText)
        console.log(operator)
        //plus button will display current number and store it in firstValue
        // setDisplayValue(numberOnDisplay)
        // setFirstValue(numberOnDisplay)
        // console.log(`The firstValue is : ${firstValue}`)
        //display new second number
        // setDisplayValue(secondValue)
        // console.log(`The secondValue is : ${secondValue}`)
        //add first number + second number
    }

    const equalsClickHandler = () => {
        if (operator === '/') {
            setDisplayValue(firstValue / secondValue)
        } else if (operator === 'x') {
            setDisplayValue(firstValue * secondValue)
        } else if (operator === '-') {
            setDisplayValue(firstValue - secondValue)
        } else if (operator === '+') {
            setDisplayValue(firstValue + secondValue)
        } else if (operator === '') {
            return
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="answer-box">{displayValue}</div>
                <div className="calc-row">
                    <button onClick={allClear} className="calc-button calc-button-top">AC</button>
                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-top">+/-</button>
                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-top">%</button>

                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">7</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">8</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">9</button>

                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">4</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">5</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">6</button>

                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">1</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">2</button>
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button">3</button>

                    <button onClick={ (e) => operatorClickHandler(e) } className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={ (e) => numberClickHandler(e) } className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>

                    <button onClick={ (e) => equalsClickHandler(e) } className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator