import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [num, setNum] = useState({
        num1: null,
        display: "",
        operator: ""
    })
    let selectNum = (e, newNum) => {
        e.preventDefault();
        console.log(newNum)
        // if diplay: "" & newNum = 0 , display error 
        setNum({
            equation: num.equation + newNum
        })
    }

// set display to the string of numbers selected
// on click of operator
    // set operator to what was selected
    // add current displayed string to num1
    // set display to empty string
    // if operator is already there display error message

// on click of equal sign
    // trigger function
        //that takes num1 {operator} display = answer
        // set display to answer
        // clear operator

// on click of A/C
    //set num1: null, set display: "", set operator: ""

    let equate = () => {
        let answer = parseInt(num.num1) + parseInt(num.operator) + parseInt(num.display);
        setNum({
             display: answer
        })
    }

    let min = () => {
        setNum({
            answer: parseInt(num.num1) - parseInt(num.num2)
        })
    }

    let mult(e) {
        setNum({
            answer: parseInt(num1) * parseInt(num2)
        })
    }

    let div(e) {
        setNum({
            answer: parseInt(num1) / parseInt(num2)
        })
    }

    let solveEquation = (e, equation) => {
        e.preventDefault();
        if (num.equation.filter("+")) {
            sum()
        } else if (num.equation.filter("-")) {

        }
    }
    // let sum = (e, newNum) => {
    //     e.preventDefault();
    //     console.log(newNum)
    //     console.log(num)
    //     setChosenIngredients([num, ...newNum]);
    //   }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num.equation}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={(e) => {selectNum(e, e.target.value);}}>7</button>
                    <button className="calc-button" value="8" onClick={(e) => {selectNum(e, e.target.value);}}>8</button>
                    <button className="calc-button" value="9" onClick={(e) => {selectNum(e, e.target.value);}}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={(e) => {selectNum(e, e.target.value);}}>4</button>
                    <button className="calc-button" value="5" onClick={(e) => {selectNum(e, e.target.value);}}>5</button>
                    <button className="calc-button" value="6" onClick={(e) => {selectNum(e, e.target.value);}}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={(e) => {selectNum(e, e.target.value);}}>1</button>
                    <button className="calc-button" value="2" onClick={(e) => {selectNum(e, e.target.value);}}>2</button>
                    <button className="calc-button" value="3" onClick={(e) => {selectNum(e, e.target.value);}}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={(e) => {selectNum(e, e.target.value);}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator