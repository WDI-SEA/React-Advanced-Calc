import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [total, setTotal] = useState(0);
    const [input, setInput] = useState([]);
    const operators = ["/", "x", "+", "-"];

    function resetCalculator() {
        setTotal(0);
        setInput([]);
    }

    function addInput(e) {
        let buttonValue = e.target.value;
        let regexNumber = new RegExp("^[0-9]+$");

        if (input.length < 1 && regexNumber.test(buttonValue)) {
            setInput([buttonValue]);
            return;
        }

        if (regexNumber.test(buttonValue)){
            input[input.length - 1] += buttonValue;
            return;
        } else if (operators.includes(buttonValue)) {
            if(regexNumber.test(input[input.length-1])) {
                setInput([...input, buttonValue, ""]);
                return;
            } else {
                return;
            }
        }
    }

    function calculateTotal() {
        let totalArray = input;
        operators.forEach(operator => {
            while(totalArray.indexOf(operator) !== -1) {
                const currentIndex = totalArray.indexOf(operator);

                let prevNum = parseInt(totalArray[currentIndex-1]);
                let nextNum = parseInt(totalArray[currentIndex+1]);
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

        setInput([...totalArray]);
        setTotal(totalArray[0]);
        return;
    }
    

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {total}</p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => resetCalculator()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={(e) => addInput(e)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={(e) => addInput(e)}>7</button>
                    <button className="calc-button" value="8" onClick={(e) => addInput(e)}>8</button>
                    <button className="calc-button" value="9" onClick={(e) => addInput(e)}>9</button>
                    <button className="calc-button calc-button-op" value="x" onClick={(e) => addInput(e)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={(e) => addInput(e)}>4</button>
                    <button className="calc-button" value="5" onClick={(e) => addInput(e)}>5</button>
                    <button className="calc-button" value="6" onClick={(e) => addInput(e)}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={(e) => addInput(e)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={(e) => addInput(e)}>1</button>
                    <button className="calc-button" value="2" onClick={(e) => addInput(e)}>2</button>
                    <button className="calc-button" value="3" onClick={(e) => addInput(e)}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={(e) => addInput(e)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0" onClick={(e) => addInput(e)}>0</button>
                    <button className="calc-button" value="." onClick={(e) => addInput(e)}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => calculateTotal()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator