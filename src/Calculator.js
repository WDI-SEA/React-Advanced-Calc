import React, { useLayoutEffect, useState } from 'react'
import Output from './Output'
// import Functions from './Functions'

const Calculator = props => {
    // Declare state variables

    // const [result,setResult] = useState(0)
    const emptyBuffer=''
    const [buffer,setBuffer] = useState(emptyBuffer)
    const [buffer2,setBuffer2] = useState(emptyBuffer)
    const [display,setDisplay] = useState(buffer)
    const [mode,setMode] = useState(emptyBuffer)
    const [history,setHistory] = useState([])

    const addStrings = (a,b) => {
        return parseInt(b)+parseInt(a)
    }

    const subtractStrings = (a,b) => {
        return parseInt(b)-parseInt(a)
    }

    const multiplyStrings = (a,b) => {
        return parseInt(b)*parseInt(a)
    }

    const divideStrings = (a,b) => {
        return parseInt(b)/parseInt(a)
    }

    function updateHistory(s) {
        setHistory([s, ...history])
        console.log(s)
    }

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

    useLayoutEffect (() => {
        // console.log(process(mode))
        console.log('buffer1 current',buffer)
        console.log('buffer2 current',buffer2)
        console.log('mode set to', mode)
        setDisplay(buffer)
    },
    [buffer]
    )

    const allClear = () => {
        setBuffer(emptyBuffer)
        setBuffer2(emptyBuffer)
        setMode(emptyBuffer)
    }


    const modeClick = (e) => {
        if (mode !== "") {return false}
        console.log('mode clicked is ', e.target.id)
        updateHistory(e.target.id)
        setMode(e.target.id) 
        setBuffer2(buffer)
        setBuffer(emptyBuffer)
    }


    const runRegister = (e) => {
        console.log('total:',process(mode),'typeof:',typeof(process(mode)))
        updateHistory(`= ${process(mode).toString()}`)
        setBuffer(emptyBuffer)
        setBuffer2(process(mode).toString())
        setMode('')
    }
    


    const equalsClick = (e) => {
        // console.log(e.target)
        if (buffer === '' || buffer2 === '') {return false} runRegister(e)


        // let newTotal
        // newTotal = addStrings(buffer,buffer2)
        // setBuffer((newTotal.toString()))
    }

    const numberClick = (e) => {
        updateHistory(e.target.innerHTML)
        if (e.target.innerHTML === '0' && buffer === "")
            {return false}
        setBuffer(buffer + e.target.innerHTML)
        console.log('pressed button',e.target.innerHTML)
        console.log('target is type', typeof(e.target.innerHTML))
        console.log('buffer is type', typeof(buffer))
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
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
            <div className="output-display">
                <Output outputs={history} />
            </div>
        </div>
    )

}

export default Calculator