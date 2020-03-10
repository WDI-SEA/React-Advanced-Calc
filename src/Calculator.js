import React, { useState } from 'react'

function Calculator(props) {
    // Declare state variables
    let tempNum;

    const [display, setDisplay] = useState(0);
    const [operator, setOperator] = useState('');
    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);
    const [numOneTrue, setNumOneTrue] = useState(true);
    const [numTwoAvail, setNumTwoAvail] = useState(false);
    const [end, setEnd] = useState(false);

    let clearBtnHandler = function(e) {
        // sets state to 0 and make sure answer-box is updated back to 0, but that's probably set elsewhere
        setNumOne(0);
        setNumTwo(0);
        setNumOneTrue(true);
        setNumTwoAvail(false);
        setOperator('');
        setDisplay(0);
        setEnd(false);
    }

    let equalBtnHandler = function(e) {
        if (!numTwoAvail) {
            if (operator === "+") {
                tempNum = parseInt(display) + parseInt(numTwo);
            } else if (operator === "-") {
                tempNum = parseInt(display) - parseInt(numTwo);
            } else if (operator === "/") {
                tempNum = parseInt(display) / parseInt(numTwo);
            } else if (operator === "x") {
                tempNum = parseInt(display) * parseInt(numTwo);
            } else {
                tempNum = display;
            }
        } else {
            setNumTwo(display)
            if (operator === "+") {
                tempNum = parseInt(numOne) + parseInt(display);
            } else if (operator === "-") {
                tempNum = parseInt(numOne) - parseInt(display);
            } else if (operator === "/") {
                tempNum = parseInt(numOne) / parseInt(display);
            } else if (operator === "x") {
                tempNum = parseInt(numOne) * parseInt(display);
            } else {
                tempNum = display;
            }
        }
        console.log(`this is tempnum: ${tempNum}`)
        setNumTwoAvail(false);
        setDisplay(tempNum);
        setNumOne(tempNum)
        // console.log(`This is numTwo: ${numTwo}`)
        console.log(`This is display: ${display}`)
        console.log(`This is tempNum: ${tempNum}`)
        setEnd(true);
    }

    // Error messages if the user makes a mistake (such as trying to use two operators)

    function numBtnHandler(e) {
        if (end) {
            console.log('test3');
            setEnd(false);
            setNumOneTrue(true);
            console.log("I am running numTwoavail at: " + numTwoAvail);
            setNumTwoAvail(false);
            console.log("I am running numTwoavail at: " + numTwoAvail);
            setNumOne(0);
            setNumTwo(0);
            setOperator('');
            setDisplay(0);
            console.log("I am running numOnetru at: " + numOneTrue);
        }
        if (numOneTrue) {
            if (display === 0) {
                console.log(e.target.value);
                setDisplay(e.target.value);
                return
            } else {
                console.log(`numOne: ${numOne}`)
                tempNum = display + e.target.value;
                console.log(`This is tempNum: ${tempNum}`)
                setDisplay(tempNum);
                console.log(`display: ${display}`)
                return
            }
        } else {
            if (!numTwoAvail) {
                console.log('test1');
                console.log(e.target.value);
                setDisplay(e.target.value);
                setNumTwoAvail(true);
                console.log("I am running numOnetru at: " + numOneTrue);
                return
            } else {
                console.log('test2');
                console.log(numTwoAvail);
                console.log(`numTwo: ${numTwo}`);
                tempNum = display + e.target.value;
                console.log(`This is tempNum: ${tempNum}`);
                setDisplay(tempNum);
                console.log(`display: ${display}`);
                return
            }
        }
    }

    let operatorBtnHandler = function(e) {
        // operator handler needs to deal with this: 4+3= then without clearing hitting 5+4=
        setOperator(e.target.value);
        setNumOne(display);
        setNumOneTrue(false);
        return
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearBtnHandler}>AC</button>
                    <button className="calc-button calc-button-top" value={'+/-'}>+/-</button>
                    <button className="calc-button calc-button-top" value={'%'}>%</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtnHandler} value={'/'}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={(e) => numBtnHandler(e)}>7</button>
                    <button className="calc-button" value={8} onClick={(e) => numBtnHandler(e)}>8</button>
                    <button className="calc-button" value={9} onClick={numBtnHandler}>9</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtnHandler} value={'x'}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={4} onClick={numBtnHandler}>4</button>
                    <button className="calc-button" value={5} onClick={numBtnHandler}>5</button>
                    <button className="calc-button" value={6} onClick={numBtnHandler}>6</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtnHandler} value={'-'}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={1} onClick={numBtnHandler}>1</button>
                    <button className="calc-button" value={2} onClick={numBtnHandler}>2</button>
                    <button className="calc-button" value={3} onClick={numBtnHandler}>3</button>
                    <button className="calc-button calc-button-op" onClick={operatorBtnHandler} value={'+'}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value={0} onClick={numBtnHandler}>0</button>
                    <button className="calc-button" value={'.'}>.</button>
                    <button className="calc-button calc-button-op" onClick={equalBtnHandler} value={'='}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator