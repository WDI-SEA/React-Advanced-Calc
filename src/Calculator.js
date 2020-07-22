import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [sum, setSum] = useState(0);
    let [operator, setOperator] = useState("");
    let [num, setNum] = useState("");
    let [display, setDisplay] = useState("");

    // Equals function
    const equals = () => {
        if (operator == "+") {
            setSum(sum + parseInt(num))
        } else if (operator == "-") {
            setSum(sum - parseInt(num))
        } else if (operator == "/") {
            setSum(sum / parseInt(num))
        } else if (operator == "*") {
            setSum(sum * parseInt(num))
        } else if (operator == "%") {
            let division = sum / parseInt(num);
            let fraction = division - Math.floor(division)
            let remainder = fraction * parseInt(num);
            setSum(Math.round(remainder))
        }
        setNum("");
        setDisplay("");
    }

    // Clear Function
    const clear = () => {
        setSum(0);
        setNum("");
        setDisplay("");
        setOperator("");
    }

    const operators = (sign) => {
        if (!num) {
            setDisplay("Only one operator must be used");
        } else {
            if (!operator) {
                setSum(parseInt(num))
            } else {
                equals()
            }
            setOperator(sign);
            setNum("");
        }
    }

    // Edge case of 0 in front
    const edgeTester = (char) => {
        if (!num && char == "0") {
            setDisplay("Must not have leading 0")
        } else {
            setNum(num + char);
        }
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{operators}{num?num:0}</p>
                <div className="answer-box">{sum}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => clear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => operators("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => edgeTester("7")}>7</button>
                    <button className="calc-button" onClick={() => edgeTester("8")}>8</button>
                    <button className="calc-button" onClick={() => edgeTester("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("*")}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => edgeTester("4")}>4</button>
                    <button className="calc-button" onClick={() => edgeTester("5")}>5</button>
                    <button className="calc-button" onClick={() => edgeTester("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => edgeTester("1")}>1</button>
                    <button className="calc-button" onClick={() => edgeTester("2")}>2</button>
                    <button className="calc-button" onClick={() => edgeTester("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => operators("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={() => edgeTester("0")}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={() => equals()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator