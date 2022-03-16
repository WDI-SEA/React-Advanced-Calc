import React from "react";
import { useState } from "react";

function Calculator() {
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [currentNum, setCurrentNum] = useState("");

  const clear = () => {
    setOperator("");
    setResult("");
    setCurrentNum("");
  };

  const number = (e) => {
    if (currentNum === null) {
      setCurrentNum(e.target.value);
    } else {
      setCurrentNum(currentNum + e.target.value);
    }
    console.log(e.target.value, "this number");
  };

  const changeOperator = (e) => {
    // setPreviousNum(currentNum)
    setOperator(e.target.value);
    setResult(Number(currentNum));
    setCurrentNum("");
  };

  const calculate = () => {
    setResult(Number(currentNum));

    if (operator === "+") {
      setResult(result + Number(currentNum));
    } else if (operator === "-") {
      setResult(result - Number(currentNum));
    } else if (operator === "/") {
      setResult(result / Number(currentNum));
    } else if (operator === "x") {
      setResult(result * Number(currentNum));
    } else {
      setResult("invalid");
    }
  };

  const posNeg = () => {
    setCurrentNum(currentNum * -1);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">{result}</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top" onClick={clear}>
            AC
          </button>
          <button className="calc-button calc-button-top" onClick={posNeg}>
            +/-
          </button>
          <button className="calc-button calc-button-top">%</button>
          <button className="calc-button calc-button-op" value="/" onClick={changeOperator}>
            /
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" value="7" onClick={number}>
            7
          </button>
          <button className="calc-button" value="8" onClick={number}>
            8
          </button>
          <button className="calc-button" value="9" onClick={number}>
            9
          </button>
          <button className="calc-button calc-button-op" value="x" onClick={changeOperator}>
            x
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" value="4" onClick={number}>
            4
          </button>
          <button className="calc-button" value="5" onClick={number}>
            5
          </button>
          <button className="calc-button" value="6" onClick={number}>
            6
          </button>
          <button className="calc-button calc-button-op" value="-" onClick={changeOperator}>
            -
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button" value="1" onClick={number}>
            1
          </button>
          <button className="calc-button" value="2" onClick={number}>
            2
          </button>
          <button className="calc-button" value="3" onClick={number}>
            3
          </button>
          <button className="calc-button calc-button-op" value="+" onClick={changeOperator}>
            +
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2" value="0" onClick={number}>
            0
          </button>
          <button className="calc-button">.</button>
          <button className="calc-button calc-button-op" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
