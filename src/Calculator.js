import React, { useState } from 'react';

function Calculator() {
  const [currentNum, setCurrentNum] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [decimal, setDecimal] = useState('')

  const handleNumberInput = (e) => {


    if(e.target.innerText === "."){
        setDecimal(1)
    }

    if(e.target.innerText === '.' && decimal === 1){
        return
    }


    if (currentNum === '0' && e.target.innerText == 0) {
      return;
    }
    if (currentNum === '0') {
      return setCurrentNum(currentNum.slice(1) + e.target.innerText);
    }
    setCurrentNum(currentNum + e.target.innerText);
  };

  const handleOperatorInput = (e) => {

    setCurrentOperator(e.target.innerText);
    if (currentNum) {
      setFirstNum(currentNum);
    }
    setCurrentNum('');
    setDecimal("")
  };

  const handleClear = (e) => {
    setCurrentNum('0');
    setCurrentOperator('');
    setFirstNum('');
  };

  const handlePosNeg = () => {
    if (Number(currentNum) == 0) {
      return;
    } else if (Number(currentNum) > 0) {
      setCurrentNum('-' + currentNum);
    } else {
      let newCurrent = currentNum.slice(1);
      setCurrentNum(newCurrent);
    }
  };

  const handleEqual = (e) => {
      let result =""

    if (currentOperator === 'x') {
      result = Number(firstNum) * Number(currentNum);
    } else if (currentOperator === '-') {
      result = Number(firstNum) - Number(currentNum);
    } else if (currentOperator === '/') {
      result = Number(firstNum) / Number(currentNum);
    } else if (currentOperator === '+') {
      result = Number(firstNum) + Number(currentNum);
    }
    setCurrentNum(result);
    setFirstNum('');
    setCurrentOperator('');
    setDecimal("")
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <div className="answer-box" style={{fontSize:"50px", display:"flex", flexDirection:"column-reverse"}}>{currentNum}</div>
        <div className="calc-row">
          <button
            onClick={handlePosNeg}
            className="calc-button calc-button-top"
          >
            +/-
          </button>
          <button onClick={handleClear} className="calc-button calc-button-top">
            AC
          </button>
          <button className="calc-button calc-button-top">%</button>
          <button
            onClick={handleOperatorInput}
            className="calc-button calc-button-op"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumberInput} className="calc-button">
            7
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            8
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            9
          </button>
          <button
            onClick={handleOperatorInput}
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumberInput} className="calc-button">
            4
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            5
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            6
          </button>
          <button
            onClick={handleOperatorInput}
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumberInput} className="calc-button">
            1
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            2
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            3
          </button>
          <button
            onClick={handleOperatorInput}
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumberInput} className="calc-button width-2">
            0
          </button>
          <button onClick={handleNumberInput} className="calc-button">
            .
          </button>
          <button onClick={handleEqual} className="calc-button calc-button-op">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
