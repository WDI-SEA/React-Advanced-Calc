import React, {useState} from 'react';

const Calculator = props => {
  // Declare state variables
  let [num, setNum] = useState(0);
  let [num2, setNum2] = useState(0);
  let [operator, setOperator] = useState(null);
  let [total, setTotal] = useState(null);

  let clearCalc = (e) => {
    setCurrentNum('0');
    setNum1('');
    setNum2('');
    setResult('');
    setOperator('');
  };

  const calculations = () => {
    if (operator === '+') {
      setTotal(Number(num) + Number(num2));
    } else if (operator === '-') {
      setTotal(Number(num) - NUmber(num2));
    } else if (operator === '/') {
      setTotal(Number(num) / Number(num2));
    } else if (operator === '*') {
      setTotal(Number(num) * Number(num2));
    } else if (operator === '%') {
      let total1 = total / Number(num);
      let total2 = num * Math.floor(total1);
      let remainder = total - total2;
      setTotal(Math.round(remainder));
    }
  };
};



return (
  <div className="container">
    <h1>React Calculator</h1>
    <div className="calc-container">
      <p>Values: </p>
      <div className="answer-box">{result}</div>
      <div className="calc-row">
        <button className="calc-button calc-button-top" onClick={clearCalc} value='clear'>AC</button>
        <button className="calc-button calc-button-top" onClick={} value='+/-'>+/-</button>
        <button className="calc-button calc-button-top" onClick={} value='%'>%</button>
        <button className="calc-button calc-button-op" onClick={} value='/'>/</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" onClick={} value='7'>7</button>
        <button className="calc-button" onClick={} value='8'>8</button>
        <button className="calc-button" onClick={} value='9'>9</button>
        <button className="calc-button calc-button-op" onClick={} value='*'>x</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" onClick={} value='4'>4</button>
        <button className="calc-button" onClick={} value='5'>5</button>
        <button className="calc-button" onClick={} value='6'>6</button>
        <button className="calc-button calc-button-op" onClick={} value='-'>-</button>
      </div>
      <div className="calc-row">
        <button className="calc-button" onClick={} value='1'>1</button>
        <button className="calc-button" onClick={} value='2'>2</button>
        <button className="calc-button" onClick={} value='3'>3</button>
        <button className="calc-button calc-button-op" onClick={} value='+'>+</button>
      </div>
      <div className="calc-row">
        <button className="calc-button width-2" onClick={} value='0'>0</button>
        <button className="calc-button" onClick={} value='.'>.</button>
        <button className="calc-button calc-button-op" onClick={} value='submit'>=</button>
      </div>
    </div>
  </div>
);
}
;

export default Calculator;