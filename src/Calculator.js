import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    // let [num1, setNum1] = useState('')
    // let [num2, setNum2] = useState('')
    // let [currentNum, setCurrentNum] = useState('')
    let [num, setNum] = useState('')
    let [equation, setEquation] = useState('')
    //let [ops, setOps] = useState('')
    let [inputs, setInputs] = useState([])
    let [newInputs, setNewInputs] = useState([])
   


    const inputNum = (value) => {
        setNum(num + value)
        setEquation(equation + value)
        console.log(equation)
    }

    const inputOp = (value) => {
        setEquation(equation + value)
        setNum('')
        console.log(equation)
        inputs.push(num)
        inputs.push(value)
        console.log(inputs) 
    }

    const clearBut = () => {
        console.log(equation)
        setNum('')
        setInputs([])
        setEquation('')
    }

    const add = (num1, num2) => {
        return parseInt(num1) + parseInt(num2)
    }

    const sub = (num1, num2) => {
        return parseInt(num1) - parseInt(num2)
    }

    const divide = (num1, num2) => {
        return parseInt(num1) / parseInt(num2)
    }

    const mult = (num1, num2) => {
        return parseInt(num1) * parseInt(num2)
    }

    const math = () => {
        inputs.push(num)
        console.log(inputs)
        //use 2 loops, one for add/sub, one of mult,div
        for (let i=0; i < inputs.length; i++) {
            if (inputs[i] === '+' || inputs[i] === '-' || inputs[i] === 'x' || inputs[i] === '/') {
                if(inputs[i+1] === '+' || inputs[i+1] === '-' || inputs[i+1] === 'x' || inputs[i+1] === '/') {
                    setEquation('error')
                }
            }
        }

        for (let i =0;i < inputs.length; i++) {
            if (inputs[i] === '+' || inputs[i] === '-') {
                if (inputs[i -2] === 'x') {
                    newInputs.push(inputs[i])
                } else {
                    newInputs.push(inputs[i-1])
                    newInputs.push(inputs[i])
                }
                if (i === inputs.length-2) {
                    newInputs.push(inputs[inputs.length -1])
                }

            } else if (inputs[i] === 'x') {
                let result = 0;
                result = mult(inputs[i-1], inputs[i+1])
                inputs[i +1] = result
                newInputs.push(result)
            } else if (inputs[i] === '/') {
                let result = 0;
                result = divide(inputs[i-1], inputs[i+1])
                inputs[i +1] = result
                newInputs.push(result)
            }

        }
         

        console.log(newInputs)
        



        for (let i = 0; i < newInputs.length -1; i++) {
            let result = 0;
            if (newInputs[i] === "+") {
                console.log(add(newInputs[i-1], newInputs[i+1]))
                result = add(newInputs[i-1], newInputs[i+1])
                
                newInputs[i+1] = result
            } else if (newInputs[i] === "-") {
                console.log(sub(newInputs[i-1], newInputs[i+1]))
                result = sub(newInputs[i-1], newInputs[i+1])
                newInputs[i+1] = result
            } 

                console.log(newInputs)
            
        }
        console.log(newInputs[newInputs.length -1])
        setEquation(newInputs[newInputs.length -1])
      
        setNum('')
        setInputs([])
        
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box"> {equation} </div>
                <div className="calc-row"> 
                    <button onClick={clearBut} 
                    className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={() => { inputOp('/') }} 
                    className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('7') }}
                     className="calc-button">7</button>
                    <button onClick={() => { inputNum('8') }}
                     className="calc-button">8</button>
                    <button onClick={() => { inputNum('9') }}
                     className="calc-button">9</button>
                    <button onClick={() => { inputOp('x') }} 
                    className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('4') }}
                     className="calc-button">4</button>
                    <button onClick={() => { inputNum('5') }}
                     className="calc-button">5</button>
                    <button onClick={() => { inputNum('6') }}
                     className="calc-button">6</button>
                    <button onClick={() => { inputOp('-') }} 
                    className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('1') }} 
                     className="calc-button">1</button>
                    <button onClick={() => { inputNum('2') }} 
                     className="calc-button">2</button>
                    <button onClick={() => { inputNum('3') }} 
                     className="calc-button">3</button>
                    <button onClick={() => { inputOp('+') }} 
                    className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={() => { inputNum('0') }}
                     className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={math} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator