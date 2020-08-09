import React, { useState } from 'react'

const Calculator = props => {
    const [display, setDisplay] = useState("0")
    const [errorDisplay, setErrorDisplay] = useState("");
    const [num, setNum] = useState("");
    const [operator, setOperator] = useState("");
    const [nextNum, setNextNum] = useState(true);

    const clearAll = () => {
        setDisplay("0");
        setNextNum(true);
        setErrorDisplay("");
    }

    const numberClick = (e) => {
        if (nextNum || (display === "0")) { 
            setDisplay(e.target.innerHTML)
        } else {
            setDisplay(display + (e.target.innerHTML));
        }
        setNextNum(false);
    }

    const operatorClick = (e) => {
        setNum(display);
        setOperator(e.target.innerHTML);
        setNextNum(true)
    }

    const evalClick = () => {   
        switch (operator) {
            case "+":
                setDisplay(parseInt(num) + parseInt(display))
                break;
            case "-":
                setDisplay(parseInt(num) - parseInt(display))
                break;
            case "x":
                setDisplay(parseInt(num) * parseInt(display))
                break;
            case "/":
                setDisplay(parseInt(num) / parseInt(display))
        }
        setOperator("");
        setNum("");
        setNextNum(true);
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p className="error-display">{errorDisplay}</p>
                <div className="answer-box">{display}</div>
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
                    <button className="calc-button calc-button-op"onClick={(e) => evalClick(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator