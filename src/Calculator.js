import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [tempNum, setTempNum] = useState('')
    let [num, setNum] = useState('')
    let [display, setDisplay] = useState(0)
    let result = 0
    var currentOp = ''


    let handleClick = (e) => {

        if (tempNum.length < 1 && e.target.value == 0 || e.target.value == 'AC') {

            setTempNum('')
            setNum('')
            setDisplay(0)
            console.log('if', tempNum)
        }
        else {
            setTempNum(tempNum += (e.target.value))
            setDisplay(tempNum)
            console.log('else', tempNum)
        }
    }

    let handleOp = (e) => {
        currentOp = e.target.value
        console.log('currentOp----->',currentOp)
        console.log('currentOp----->',typeof(currentOp))
        setNum(tempNum)
        console.log('num-----', num)
        if ((tempNum) && (num)) {
            let numb1 = parseFloat(tempNum)
            let numb2 = parseFloat(num)

            if (e.target.value == "+"){
                currentOp = "+"
                var result = numb1 += numb2
            }
            else if (e.target.value == "-") {
                var result = numb2 -= numb1
            }
            else if (e.target.value == "/") {
                var result = numb1 /= numb2
            }
            else if (e.target.value == "*") {
                var result = numb1 *= numb2
            }
            else if (e.target.value == "=") {
                console.log('result equation---->',result)
                var result = `numb1 ${currentOp} numb2`
            }
            var convString = result.toString()
            setDisplay(result)
            setNum(convString)
        }
        setTempNum('')
        return display
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
                    <button onClick = {handleOp} value ="/" className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="7" className="calc-button" >7</button>
                    <button onClick={handleClick} value="8" className="calc-button">8</button>
                    <button onClick={handleClick} value="9" className="calc-button">9</button>
                    <button onClick={handleOp} value = "*"className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="4" className="calc-button">4</button>
                    <button onClick={handleClick} value="5" className="calc-button">5</button>
                    <button onClick={handleClick} value="6" className="calc-button">6</button>
                    <button onClick={handleOp} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="1" className="calc-button">1</button>
                    <button onClick={handleClick} value="2" className="calc-button">2</button>
                    <button onClick={handleClick} value="3" className="calc-button">3</button>
                    <button onClick={handleOp} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={handleClick} value="0" className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={handleOp} value="=" className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator