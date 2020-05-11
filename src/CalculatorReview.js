import React,{useState} from 'react';

const CalculatorReview= props=> {
  // Declare state variables
  let [answer, setAnswer] = useState('0')
  let [num1, setNum1] = useState('')
  let [currentNum, setCurrentNum] = useState('')
  let [operator, setOperator] = useState('')
  let [error, setError] = useState('')

  let numClick = e => {
      console.log("num was clicked", e.target.value)
      if(currentNum || e.target.value !== '0'){
        setCurrentNum(currentNum + e.target.value)
      }
    
  }
  const opClick = e =>{
    console.log("operator was clicked", e.target.value)
    if(operator){
        setError('operator already set')
    }
    else if(!currentNum){
        setError('Please enter a number')
    }
    else{
        setNum1(currentNum)
        setOperator(e.target.value)
        setError('')
        setCurrentNum('')
    }
  }

  const clear=()=>{
      setAnswer('0')
      setError('')
      setCurrentNum('')
      setNum1('')
      setOperator('')
  }
  const plusMinusClick =()=>{
    setCurrentNum(currentNum*-1)
 }
const dotClick =()=>{
  if(!currentNum){
      setCurrentNum('0.')
  }else if(currentNum.indexOf('.') === -1){
    setCurrentNum(currentNum+'.')
  }
}
// alternative to % functionality
/*   const percentClick=()=>{
      if(currentNum){
        let tempAnswer = Number(currentNum)/100
        setCurrentNum(tempAnswer.toString().slice(0,10))
      }
      else{
          setError("Please enter a number first")
      }
    
  }  */
 
const solve=()=>{
    if( !num1 || !operator){
        setError('Please enter a valid expression')
    }
    else if(!currentNum){
        setError('Enter a second number!')
    }
    else{
        let tempAnswer
        if(operator === '+'){
            tempAnswer = Number(num1) +Number(currentNum)
        }
        else if(operator === '-'){
            tempAnswer = Number(num1) - Number(currentNum)
        }
        else if(operator === '*'){
            tempAnswer = Number(num1) * Number(currentNum)
        }
        else if(operator === '/'){
            tempAnswer = Number(num1) / Number(currentNum)
        }
        else if(operator === '%'){
            tempAnswer = Number(num1) % Number(currentNum)
        }
        setAnswer(tempAnswer.toString().slice(0,10))
        setError('')
        setCurrentNum(tempAnswer.toString().slice(0,10))
        setNum1('')
        setOperator('')
    }
  }
  return (
      <div className="container">
          <h1>React Review Calculator</h1>
          <div className="calc-container">
            <p>Values: {num1 || currentNum}{operator}{operator ? currentNum : ''}</p>
              <div className="answer-box">{answer}</div>
              <div className="calc-row">
                  <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                  <button className="calc-button calc-button-top" onClick={plusMinusClick} >+/-</button>
                  <button className="calc-button calc-button-top" value="%" onClick={opClick}>%</button>
                  <button className="calc-button calc-button-op" value="/" onClick={opClick}>/</button>
              </div>
              <div className="calc-row">
                  <button className="calc-button" value="7" onClick={numClick}>7</button>
                  <button className="calc-button" value="8" onClick={numClick}>8</button>
                  <button className="calc-button" value="9" onClick={numClick}>9</button>
                  <button className="calc-button calc-button-op" value="*" onClick={opClick}>x</button>
              </div>
              <div className="calc-row">
                  <button className="calc-button" value="4" onClick={numClick}>4</button>
                  <button className="calc-button" value="5" onClick={numClick}>5</button>
                  <button className="calc-button" value="6" onClick={numClick}>6</button>
                  <button className="calc-button calc-button-op" value="-" onClick={opClick}>-</button>
              </div>
              <div className="calc-row">
                  <button className="calc-button" value="1" onClick={numClick}>1</button>
                  <button className="calc-button" value="2" onClick={numClick}>2</button>
                  <button className="calc-button" value="3" onClick={numClick}>3</button>
                  <button className="calc-button calc-button-op" value="+" onClick={opClick}>+</button>
              </div>
              <div className="calc-row">
                  <button className="calc-button width-2" value="0" onClick={numClick}>0</button>
                  <button className="calc-button" onClick={dotClick}>.</button>
                  <button className="calc-button calc-button-op" onClick={solve}>=</button>
              </div>
          </div>
        <p className="error">{error}</p>
      </div>
  )
}

export default CalculatorReview