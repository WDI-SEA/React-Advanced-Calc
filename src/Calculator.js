import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [num, setNum] = useState({
        num1: null,
        display: "",
        operator: ""
    })

    const opTable = {
        '+': (x, y) => (x+y),
        '-': (x, y) => (x-y),
        'x': (x, y) => (x*y),
        '/': (x, y) => (x/y),
        '%': (x, y) => (x%y)
    }

    //event handlers and FUNctions

    let selectNum = (e) => {
        e.preventDefault();
        let newNum = e.target.innerText
        console.log(newNum)
        // if diplay: "" & newNum = 0 , display error 
        setNum({
            display: num.display + newNum
        })
        console.log(num.display)
    }

// set display to the string of numbers selected
// on click of operator
    let selectOp = (e) => {
        e.preventDefault();
        let newOp = e.target.innerText
        console.log(newOp)
        setNum({
            num1: num.display,
            operator: newOp
        })
        console.log(num.operator)
        console.log(num.num1)


        // if(!num.num1) {
        //     return
        // }
        // if (num.num1) {
        //     setNum({
        //         num1: opTable[num.operator](Number(num.num1), Number(num.display))
        //     })
        // } else {}

    }
    // set operator to what was selected
    // add current displayed string to num1
    // set display to empty string
    // if operator is already there display is 0 error message



// on click of equal sign
    // trigger function
        //that takes num1 {operator} display = answer
        // set display to answer
        // clear operator
    let equate = (e) => {
        console.log( `${num.num1} ${num.operator} ${num.display}`)
        
        setNum({
             display: opTable[num.operator](Number(num.num1), Number(num.display))
        })
        //     let math = switch (, y) {
        //         case '+': 
        //             function(x, y) { return (x + y) };
        //             break;
        //         case '-': 
        //             function(x, y) { return (x - y) };
        //             break;
        //         case 'x': 
        //             function(x, y) {return (x * y)};
        //             break;
        //         case '/': 
        //         function(x, y) {return (x / y)};
        //     }​​​​​​​;
            
            // let answer = math(num.num1, num.display);

            // console.log(answer)

        }

// on click of A/C
    //set num1: null, set display: "", set operator: ""


    // let sum = (e, newNum) => {
    //     e.preventDefault();
    //     console.log(newNum)
    //     console.log(num)
    //     setChosenIngredients([num, ...newNum]);
    //   }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{num.display ? num.display : num.num1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={(e) => {selectNum(e);}}>7</button>
                    <button className="calc-button" value="8" onClick={(e) => {selectNum(e);}}>8</button>
                    <button className="calc-button" value="9" onClick={(e) => {selectNum(e);}}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={(e) => {selectNum(e);}}>4</button>
                    <button className="calc-button" value="5" onClick={(e) => {selectNum(e);}}>5</button>
                    <button className="calc-button" value="6" onClick={(e) => {selectNum(e);}}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={(e) => {selectOp(e);}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={(e) => {selectNum(e);}}>1</button>
                    <button className="calc-button" value="2" onClick={(e) => {selectNum(e);}}>2</button>
                    <button className="calc-button" value="3" onClick={(e) => {selectNum(e);}}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {selectOp(e);}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => {selectNum(e);}}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={(e) => {equate(e);}}>=</button>
                </div>
            </div>
        </div>
    )
}

// for operators, just take inner text (for x set it to *)

export default Calculator