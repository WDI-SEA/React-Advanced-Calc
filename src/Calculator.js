import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [tempNum, setTempNum] = useState('')
    // let [num, setNum] = useState('')
    let [display, setDisplay] = useState(0)
    var currentOp = ''


    let handleClick = (e) => {
        var opers = '/=*-'

        if (tempNum.length < 1 && e.target.value == 0 || e.target.value == 'AC') {
            setTempNum('')
            // setNum('')
            setDisplay(0)
            console.log('if', tempNum)
        }
        else if (e.target.value == "." && e.target.value == tempNum[tempNum.length -1]){
            console.log('nope')
        }
        else {
                setTempNum(tempNum += (e.target.value))
                setDisplay(tempNum)
                console.log('else', tempNum)
            }
        
    }

    let handleOp = (e) => {
        // setTempNum(tempNum += (e.target.value))
        console.log(tempNum)
        console.log(eval(tempNum))
        // let result = 
        // 

        // currentOp = e.target.value
        // let numb = parseFloat()
        // setNum(tempNum)
        
        // var convString = result.toString()
        // setDisplay(result)
        // setNum(convString)
        
        // setTempNum('')
        // return display
    }





    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button onClick={handleClick} value="AC" className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick = {handleClick} value ="/" className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="7" className="calc-button" >7</button>
                    <button onClick={handleClick} value="8" className="calc-button">8</button>
                    <button onClick={handleClick} value="9" className="calc-button">9</button>
                    <button onClick={handleClick} value = "*"className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="4" className="calc-button">4</button>
                    <button onClick={handleClick} value="5" className="calc-button">5</button>
                    <button onClick={handleClick} value="6" className="calc-button">6</button>
                    <button onClick={handleClick} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="1" className="calc-button">1</button>
                    <button onClick={handleClick} value="2" className="calc-button">2</button>
                    <button onClick={handleClick} value="3" className="calc-button">3</button>
                    <button onClick={handleClick} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="0" className="calc-button width-2">0</button>
                    <button onClick={handleClick} value="." className="calc-button">.</button>
                    <button onClick={handleOp} value="=" className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator