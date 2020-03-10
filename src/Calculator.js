import React, { useState } from 'react'
import CalcButton from './CalcButton';
import CalcButtonTop from './CalcButtonTop';
import CalcButtonOp from './CalcButtonOp';

const Calculator = props => {
    let [answerBoxText, setAnswerBoxText] = useState(0);
    
    
    let [inputModeDecimal, setInputModeDecimal] = useState(false);
    let [decimalPlace, setDecimalPlace] = useState(1);
    let [currentResult, setcurrentResult] = useState(0);

    let [currentOperation, setCurrentOperation] = useState('ADD');
    
    let [clearText, setClearText] = useState(false);
    let inputFactor = 10;

    const concatNumberToText = (number) => {
        console.log('concat');
        setAnswerBoxText(answerBoxText *= inputFactor);
        setAnswerBoxText(answerBoxText += number);
    }

    function deleteText(next, number) {
        setAnswerBoxText(0);
        setClearText(false);
        next(number);
    }

    function numericButtonClickHandler(number) {
        if (clearText) {
            if (inputModeDecimal) { 
                deleteText(decimalNumberInput, number);
            } else {
                deleteText(wholeNumberInput, number);
            }
            
            console.log(`text is deleting`);
        } else if (inputModeDecimal) { 
            decimalNumberInput(number);
        } else {
            wholeNumberInput(number);
        }
    }

    function wholeNumberInput(number) {
        console.log('wholeNumberInput');
        setAnswerBoxText(answerBoxText *= inputFactor);
        setAnswerBoxText(answerBoxText += number);
    }

    function decimalNumberInput(number) {
        console.log('decimalNumberInput');
        let valToAdd = number * (Math.pow(10,-decimalPlace));
        setDecimalPlace(decimalPlace + 1);
        console.log(`valToAdd = ${valToAdd} decimalPlace = ${decimalPlace}`);
        setAnswerBoxText(answerBoxText += valToAdd);
    }

    function changeSign() {
        setAnswerBoxText(-answerBoxText);
    }

    function divideBy100() {
        setAnswerBoxText(answerBoxText *= 0.01);
    }

    function divideOp() {
    }

    function setAddDecimal(yesNo) {
        setInputModeDecimal(yesNo);
    }

    function calcCurrentOperation() {
        if (currentOperation === 'ADD') {
            addition();
        }
    }

    // Operations
    function operationAdd() {
        calcCurrentOperation();
        setCurrentOperation('ADD');
        setAnswerBoxText(currentResult);
        setClearText(true);
    }

    function resetinputFactors() {
        setAnswerBoxText(0);
        setInputModeDecimal(false);
        setDecimalPlace(1);
        setcurrentResult(0);
    }

    function showResult() {
        calcCurrentOperation();
        setAnswerBoxText(currentResult);
    }

    function addition() {
        currentResult += answerBoxText;
    }


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{answerBoxText}</div>
                <div className="calc-row">
                    <CalcButtonTop text={'AC'} onClick={() => resetinputFactors()} />
                    <CalcButtonTop text={'+/-'} onClick={() => changeSign()} />
                    <CalcButtonTop text={'%'} onClick={() => divideBy100()} />
                    <CalcButtonTop text={'/'} onClick={() => divideOp()} />
                </div>
                <div className="calc-row">
                    <CalcButton text={7} onClick={() => numericButtonClickHandler(7)} />
                    <CalcButton text={8} onClick={() => numericButtonClickHandler(8)} />
                    <CalcButton text={9} onClick={() => numericButtonClickHandler(9)} />
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <CalcButton text={4} onClick={() => numericButtonClickHandler(4)} />
                    <CalcButton text={5} onClick={() => numericButtonClickHandler(5)} />
                    <CalcButton text={6} onClick={() => numericButtonClickHandler(6)} />
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <CalcButton text={1} onClick={() => numericButtonClickHandler(1)} />
                    <CalcButton text={2} onClick={() => numericButtonClickHandler(2)} />
                    <CalcButton text={3} onClick={() => numericButtonClickHandler(3)} />
                    <CalcButtonOp text={'+'} onClick={() => operationAdd()} />
                </div>
                <div className="calc-row">
                <CalcButton text={0} onClick={() => numericButtonClickHandler(0)} />
                <CalcButton text={'.'} onClick={() => setAddDecimal(true)} />
                <CalcButtonOp text={'='} onClick={() => showResult()} />
                </div>
            </div>
        </div>
    )
}

export default Calculator