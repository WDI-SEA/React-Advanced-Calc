import React, { useState } from 'react'

const Calculator = props => {
    const [output, setOutput] = useState("0");
    const [storedNumber, setStoredNumber] = useState("");
    const [storedOperation, setStoredOperation] = useState("");

    const clearAll = () => {
        setOutput("0");
    }

    const numberClick = (e) => {
        console.log("thisNumber", e.target);
        if (output === "0" || setStoredOperation) {
            setOutput(e.target.innerHTML)
        } else {
            setOutput(output.concat(e.target.innerHTML));
        }
    }

    const operatorClick = (e) => {
        setStoredNumber(output);
        setStoredOperation(e.target.innerHTML);
    }

    const equalsClick = () => {
        switch (storedOperation) {
            case "+":
                setOutput(String(Number(storedNumber) + Number(output)))
                break;
            case "-":
                setOutput(String(Number(storedNumber) - Number(output)))
                break;
            case "x":
                setOutput(String(Number(storedNumber) * Number(output)))
                break;
            case "/":
                setOutput(String(Number(storedNumber) / Number(output)))
        }
        setStoredOperation("");
        setStoredNumber("");
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{output}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => clearAll()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={(e) => operatorClick(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => numberClick(e)}>7</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>8</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => operatorClick(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => numberClick(e)}>4</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>5</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>6</button>
                    <button className="calc-button calc-button-op" onClick={(e) => operatorClick(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => numberClick(e)}>1</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>2</button>
                    <button className="calc-button" onClick={(e) => numberClick(e)}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => operatorClick(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => numberClick(e)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op"onClick={(e) => equalsClick(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator