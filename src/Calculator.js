import React, { useLayoutEffect, useState } from 'react'
import Output from './Output'
// import Functions from './Functions'

const Calculator = props => {
    // Declare state variables

    // const [result,setResult] = useState(0)
    const emptyBuffer='' //buffer default state
    const emptyMode=''  //mode default state
    const [buffer,setBuffer] = useState(emptyBuffer) //input value
    const [buffer2,setBuffer2] = useState(emptyBuffer)  //second input value
    const [display,setDisplay] = useState(buffer)  //display value
    const [mode,setMode] = useState(emptyMode)  //mode value
    // const [history,setHistory] = useState([])


    // operation methods for calculating results (buffer,buffer2)
    const addStrings = (a,b) => {
        return parseInt(b)+parseInt(a)
    }

    const subtractStrings = (a,b) => {
        console.log(a,b)
        return (parseInt(b) - parseInt(a))
    }

    const multiplyStrings = (a,b) => {
        return parseInt(b)*parseInt(a)
    }

    const divideStrings = (a,b) => {
        return parseInt(b)/parseInt(a)
    }

    // function updateHistory(s) {
    //     setHistory([history, ...s])
    //     console.log(s)
    // }

    //  returns calculation based on state 'mode'
    function process(m) {
    switch(m) {
        case 'plus':
            return addStrings(buffer,buffer2)
            break
        case 'minus':
            return subtractStrings(buffer,buffer2)
            break
        case 'multiply':
            return multiplyStrings(buffer,buffer2)
            break
        case 'divide':
            return divideStrings(buffer,buffer2)
            break
        default:
            console.log('no mode set')
        }
    } 
 
    // string value for output (app.js)
    function getOperator(m) {
    switch(m) {
        case 'plus':
            return "+"
            break
        case 'minus':
            return "-"
            break
        case 'multiply':
            return "*"
            break
        case 'divide':
            return "/"
            break
        default:
            console.log('no mode set')
        }
    } 

    // changes display to current value
    useLayoutEffect (() => {
        // console.log(process(mode))
        console.log('buffer1 current',buffer)
        console.log('buffer2 current',buffer2)
        console.log('mode set to', mode)
        setDisplay(buffer)
    },
    [buffer]
    )

    // resets state
    const allClear = () => {
        setBuffer(emptyBuffer)
        setBuffer2(emptyBuffer)
        setMode(emptyBuffer)
        props.setHistory([])
    }

    //click handler for operators (+,-,/,*,%)
    const modeClick = (e) => {
        if (mode !== "") {return false}
        console.log('mode clicked is ', e.target.id)
        // props.updateHistory(e.target.id)
        setMode(e.target.id) 
        if (buffer2 === emptyBuffer)
        {
            // props.updateHistory(buffer)
            setBuffer2(buffer)
            setBuffer(emptyBuffer)
        }
        console.log(false)
    }

    // calculates based on mode, buffer,buffer2, also sends result to history
    // sets buffer2 to calculated value, buffer to default, mode to default
    const runRegister = (e) => {
        console.log('total:',process(mode),'typeof:',typeof(process(mode)))
        props.updateHistory(`${buffer2} ${getOperator(mode)} ${buffer} = ${process(mode).toString()}`)
        setBuffer(emptyBuffer)
        setBuffer2(process(mode).toString())
        setMode('')
    }
    
    //handler click for equals sign, triggers runregister if buffer AND buffer2 aren't in default state
    const equalsClick = (e) => {
        // console.log(e.target)
        if (mode === emptyMode || buffer === emptyBuffer || buffer2 === emptyBuffer) {return false} 
        // props.updateHistory(buffer2)
        // props.updateHistory(buffer)
        runRegister(e) //this runs if buffer and buffer2 have both been given value
    }

    // click handler for number keys
    const numberClick = (e) => {
        // props.updateHistory(e.target.innerHTML)
        if (e.target.innerHTML === '0' && buffer === "")
            {return false}
        setBuffer(buffer + e.target.innerHTML)
        console.log('pressed button',e.target.innerHTML)
        console.log('target is type', typeof(e.target.innerHTML))
        console.log('buffer is type', typeof(buffer))
    }

    //
    return (
        <div className="container">
            <h1>React Calculator</h1>
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button onClick={allClear} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button id="modulus" className="calc-button calc-button-top">%</button>
                    <button id="divide" className="calc-button calc-button-op" onClick={modeClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberClick}>7</button>
                    <button className="calc-button" onClick={numberClick}>8</button>
                    <button className="calc-button" onClick={numberClick}>9</button>
                    <button id="multiply" className="calc-button calc-button-op" onClick={modeClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberClick}>4</button>
                    <button className="calc-button" onClick={numberClick}>5</button>
                    <button className="calc-button" onClick={numberClick}>6</button>
                    <button id="minus" className="calc-button calc-button-op" onClick={modeClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numberClick}>1</button>
                    <button className="calc-button" onClick={numberClick}>2</button>
                    <button className="calc-button" onClick={numberClick}>3</button>
                    <button className="calc-button calc-button-op" id="plus" onClick={modeClick}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numberClick}>0</button>
                    <button className="calc-button decimal">.</button>
                    <button className="calc-button calc-button-op" onClick={equalsClick}>=</button>
                </div>
        </div>
    )

}

export default Calculator