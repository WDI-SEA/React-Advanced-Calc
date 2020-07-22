import React, { useState } from 'react'

const Calculator = props => {
    const [output, setOutput] = useState("0");
    const [storedNumber, setStoredNumber] = useState("");
    const [storedOperation, setStoredOperation] = useState("");
    const [startNewNumber, setStartNewNumber] = useState(true);
    // startNewNumber determines whether the next number click should:
    // 1) replace the current output, or
    // 2) concatenate to the existing output

    const clearAll = () => {
        setOutput("0");
        setStartNewNumber(true);
    }

    const numberClick = (e) => {
        if (startNewNumber || (output === "0")) { 
            setOutput(e.target.innerHTML)
        } else {
            setOutput(output.concat(e.target.innerHTML));
        }
        setStartNewNumber(false);
    }

    const operatorClick = (e) => {
        if (e.target.innerHTML === "-" && startNewNumber){
            setOutput("-");
            setStartNewNumber(false);
        } else {
            setStoredNumber(output);
            setStoredOperation(e.target.innerHTML);
            setStartNewNumber(true);
        }
    }
    //TODO: Make operator clicks able to chain together operations if, say, the user type 9 + 3 - 5
    // Right now, that sequence will give -2 as a result (i.e. 3 - 5)

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
        setStartNewNumber(true);
    }
    // TODO: Make consecutive clicks of the Equals button repeat the last operation
    // TODO: Round answers to an appropriate # of digits so that long answers don't make calc render weirdly


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