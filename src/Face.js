import React, { useState } from 'react'

let DEFAULT_VALUE = 0;
let DEFAULT_OPERATOR = 'add';

const Face = props => {
    let [number, setNumber] = useState(DEFAULT_VALUE);
    let [operation, setOperation] = useState(DEFAULT_OPERATOR);
    let [result, setResult] = useState(DEFAULT_VALUE);
    let [display, setDisplay] = useState(DEFAULT_VALUE);

    const getResult = () => {
        console.log('getting result')
    }

    const changeNumber = (e) => {
        console.log(e.target.value);
        setDisplay(e.target.value);
        getResult();
    }

    const changeOperation = (e) => {
        console.log(e.target.value);
    }

    const clearAll = () => {
        setNumber = DEFAULT_VALUE;
        setOperation = DEFAULT_OPERATOR;
        setDisplay = DEFAULT_VALUE;
        setResult = DEFAULT_VALUE;
    }

    return (
        <div className="container">
            <div className="display">{display}</div>
            <div className="numbers">
                <div>
                <button type="button" onClick={clearAll} className="big-button">AC</button>
                <button type="button" className="operator" onClick={changeOperation} value={'divide'}><span aria-label="divide" role="img">➗</span></button>
                </div>
                <div>
                <button type="button" onClick={changeNumber} value={9}>9</button>
                <button type="button" onClick={changeNumber} value={8}>8</button>
                <button type="button" onClick={changeNumber} value={7}>7</button>
                <button type="button" className="operator" onClick={changeOperation} value={'multiply'}><span aria-label="multiply" role="img">✖️</span></button>
                </div>
                <div>
                <button type="button" onClick={changeNumber} value={6}>6</button>
                <button type="button" onClick={changeNumber} value={5}>5</button>
                <button type="button" onClick={changeNumber} value={4}>4</button>
                <button type="button" className="operator" onClick={changeOperation} value={'minus'}><span aria-label="minus" role="img">➖</span></button>
                </div>
                <div>
                <button type="button" onClick={changeNumber} value={3}>3</button>
                <button type="button" onClick={changeNumber} value={2}>2</button>
                <button type="button" onClick={changeNumber} value={1}>1</button>
                <button type="button" className="operator" onClick={changeOperation} value={'add'}><span aria-label="plus" role="img">➕</span></button>
                </div>
                <button type="button" onClick={changeNumber} className="big-button" value={0}>0</button>
                <button type="button" className="operator" onClick={changeOperation} value={'equal'}>＝</button>
            </div>
            <div className="operations"></div>
        </div>
    )
}

export default Face