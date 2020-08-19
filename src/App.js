import React, {useState} from 'react';
import './App.css';
import Calculator from './Calculator'

function App() {
  let [total, setTotal] = useState(0);
  let [operator, setOperator] = useState("");
  let [nextNum, setNextNum] = useState("");
  let [message, setMessage] = useState("");
  //functions go here
  const evaluate = () => {
    if (operator == "+") {
      setTotal(total + parseInt(nextNum))
    } else if (operator == "-") {
      setTotal(total - parseInt(nextNum))
    } else if (operator == "/") {
      setTotal(total / parseInt(nextNum))
    } else if (operator == "*") {
      setTotal(total * parseInt(nextNum))
    } else if (operator == "%") {
      let divided = total / parseInt(nextNum);
      let fraction = divided - Math.floor(divided);
      let remainder = fraction * parseInt(nextNum);
      setTotal(Math.round(remainder));
    }
    setNextNum("");
    setMessage("");
  }

  const clear = () => {
    setTotal(0); 
    setNextNum("");
    setMessage("");
    setOperator("");
  }

  const operate = (sign) => {
    if (!nextNum) {
      setMessage("You can't use two operators");
    } else {
      if (!operator) {
        setTotal(parseInt(nextNum))
      } else {
        evaluate();
      }
      setOperator(sign);
      setNextNum("");
    }
  }

  const tackNum = (numChar) => {
    if (!nextNum && numChar == "0") {
      setMessage("You can't have a leading zero")
    } else {
      setNextNum(nextNum + numChar);
    }
  }


  return (
    <div className="App">
      <Calculator 
        total={total}
        nextNum={nextNum}
        operator={operator}
        message={message}
        evaluate={evaluate}
        clear={clear}
        tackNum={tackNum}
        operate={operate}
      />
    </div>
  );
}

export default App;