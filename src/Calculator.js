import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [total, setTotal] = useState(0);
    const [input, setInput] = useState([""]);
    const operators = ["/", "x", "+", "-"];

    function resetCalculator() {
        setTotal(0);
        setInput([""]);
    }

    function pressNumber(e) {
        let buttonValue = e.target.value;
        let newValue = input[input.length - 1] + buttonValue;
        let arrayValues = input.slice(0, input.length - 1);
        setInput([...arrayValues, newValue]);
    }

    function pressDecimal() {
        let currentNum = input[input.length - 1];
        if (currentNum.length > 0 && !currentNum.includes('.')) {
            let decimalNum = input[input.length - 1] + '.';
            let arrayValues = input.slice(0, input.length - 1);
            setInput([...arrayValues, decimalNum]);
        }
    }

    function pressOperator(e) {
        let regexNumber = new RegExp("^[+-]?([0-9]*\.)?[0-9]+$");
        let buttonValue = e.target.value;
        if (regexNumber.test(input[input.length - 1])) {
            setInput([...input, buttonValue, ""]);
        }
    }

    function pressPercent() {
        let regexNumber = new RegExp("^[+-]?([0-9]*\.)?[0-9]+$");
        if (regexNumber.test(input[input.length - 1])) {
            let percentage = input[input.length - 1] / 100;
            let arrayValues = input.slice(0, input.length - 1);
            setInput([...arrayValues, percentage]);
        }
    }

    function pressPosNeg() {
        let regexNumber = new RegExp("^[+-]?([0-9]*\.)?[0-9]+$");
        if (regexNumber.test(input[input.length - 1])) {
            let switched = input[input.length - 1] * -1;
            let arrayValues = input.slice(0, input.length - 1);
            setInput([...arrayValues, switched]);
        }
    }

    function calculateTotal() {
        let totalArray = input;
        operators.forEach(operator => {
            while(totalArray.indexOf(operator) !== -1) {
                const currentIndex = totalArray.indexOf(operator);

                let prevNum = Number(totalArray[currentIndex-1]);
                let nextNum = Number(totalArray[currentIndex+1]);
                let newNum = null;

                switch(totalArray[currentIndex]) {
                    case "x":
                        newNum = prevNum * nextNum;
                        break;
                    case "/":
                        newNum = prevNum / nextNum;
                        break;
                    case "+":
                        newNum = prevNum + nextNum;
                        break;
                    case "-":
                        newNum = prevNum - nextNum;
                        break;
                }
                if (newNum !== null) {
                    let firstPart = totalArray.slice(0, currentIndex - 1);
                    let secondPart = totalArray.slice(currentIndex + 2, totalArray.length);
                    totalArray = [...firstPart, newNum, ...secondPart];
                } else {
                    setTotal("NaN");
                    return;
                }
            }
        });

        setInput([(totalArray[0]).toString()]);
        setTotal(totalArray[0]);
        return;
    }
    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{input.join(" ")}</p>
                <div className="answer-box">{total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => resetCalculator()}>AC</button>
                    <button className="calc-button calc-button-top" onClick={() => pressPosNeg()}>+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={() => pressPercent()}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={(e) => pressOperator(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={(e) => pressNumber(e)}>7</button>
                    <button className="calc-button" value="8" onClick={(e) => pressNumber(e)}>8</button>
                    <button className="calc-button" value="9" onClick={(e) => pressNumber(e)}>9</button>
                    <button className="calc-button calc-button-op" value="x" onClick={(e) => pressOperator(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={(e) => pressNumber(e)}>4</button>
                    <button className="calc-button" value="5" onClick={(e) => pressNumber(e)}>5</button>
                    <button className="calc-button" value="6" onClick={(e) => pressNumber(e)}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={(e) => pressOperator(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={(e) => pressNumber(e)}>1</button>
                    <button className="calc-button" value="2" onClick={(e) => pressNumber(e)}>2</button>
                    <button className="calc-button" value="3" onClick={(e) => pressNumber(e)}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={(e) => pressOperator(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={(e) => pressNumber(e)}>0</button>
                    <button className="calc-button" value="." onClick={() => pressDecimal()}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => calculateTotal()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator