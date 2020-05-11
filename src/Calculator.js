import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    // pulls out all the variables
    const [operation, setOperation] = useState('')
    const [numba, setNumba] = useState([])
    const [display, setDisplay] = useState(0)
    const [resetDisplay, setResetDisplay] = useState(false)

    // whenever setNum is being called, any number/decimal the user clicks is being called. 
    const setNum = (e) => {
        let newNum = e.target.innerText;
        console.log(newNum);
        if (display === 0) {
            // displays the number in the calculator that the user inputted
            // the numbers are being treat as "strings" 
            setDisplay(newNum)
        } else if (resetDisplay === true) {
            setDisplay(newNum)
            setResetDisplay(false)
        } else {
            // string concationation?
            let newDisplay = display + newNum
            setDisplay(newDisplay)
        }
        // Adding a newNum to an Array, ... means it includes all the content of the original array, newNum adds it the that array. 
        setNumba([...numba, newNum])
    }
    const clearNum = (e) => {
        // Set zero as the default input 
        setNumba([0])
        setDisplay(0)
    }
    // clickhandler for any mathematical operation
    const addOperation = (e) => {
        let op = e.target.innerText
        // whatever text in that button that the user clicked on 
        setOperation(op)
        let combineNum = ''
        for (let i = 0; i < numba.length; i++) {
            combineNum += numba[i]
        }
        console.log(combineNum)
        setNumba([combineNum])
        setResetDisplay(true)

    }
    // applies to the "=" then calcResult is being called
    const calcResult = (e) => {
        let result = 0
        let second = ''
        for (let i = 1; i < numba.length; i++) {
            second += numba[i];
        }
        console.log(second)

        console.log(numba)
        if (operation === '+') {
            result = parseInt(numba[0]) + parseInt(second)
            setDisplay(result)
            setNumba([result])
        } else if (operation === '-') {
            result = parseInt(numba[0]) - parseInt(second)
            setDisplay(result)
            setNumba([result])
        } else if (operation === 'x') {
            result = parseInt(numba[0]) * parseInt(second)
            setDisplay(result)
            setNumba([result])
        } else if (operation === '/') {
            result = parseInt(numba[0]) / parseInt(second)
            setDisplay(result)
            setNumba([result])
        } else if (operation === '%') {
            result = parseInt(numba[0]) % parseInt(second)
            setDisplay(result)
            setNumba([result])
        } else {
            console.log("Incorrect input");
        }
    }
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>CALCULATE 🤓: </p>
                {/* {display}: updates my numbers */}
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={(e) => clearNum(e)}>AC</button>
                    {/* // TODO: +/- treats numbers if they are either negative or positive */}
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={(e) => addOperation(e)}>%</button>
                    <button className="calc-button calc-button-op" onClick={(e) => addOperation(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => setNum(e)}>7</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>8</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => addOperation(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => setNum(e)}>4</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>5</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>6</button>
                    <button className="calc-button calc-button-op" onClick={(e) => addOperation(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => setNum(e)}>1</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>2</button>
                    <button className="calc-button" onClick={(e) => setNum(e)}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => addOperation(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => setNum(e)}>0</button>
                    {/* TODO: create a seperate clickhandler for period so there is only ONE period. */}
                    <button className="calc-button" onClick={(e) => setNum(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={(e) => calcResult(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator