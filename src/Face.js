import React, { useEffect, useState } from 'react'

let DEFAULT_VALUE = 0;
let DEFAULT_OPERATOR = 'add';

const Face = props => {
    let [number, setNumber] = useState(DEFAULT_VALUE);
    let [operation, setOperation] = useState(DEFAULT_OPERATOR);
    let [result, setResult] = useState(DEFAULT_VALUE);
    let [display, setDisplay] = useState(DEFAULT_VALUE);

    useEffect( () => {
        const getResult = async () => {
            let calculated;
            switch (operation) {
                case 'divide':
                    calculated = result / number;
                    break;
                case 'multiply':
                    calculated = result * number;
                    break;
                case 'minus':
                    calculated = result - number;
                    break;
                case 'add':
                    calculated = result + number;
                    break;
                default:
                    setDisplay('Choose an operator.')
            }
    
            console.log(calculated);
            setResult(calculated);
            setDisplay(calculated);
        }

        getResult();
    }, [number]);

    const changeNumber = (e) => {
        let num = e.target.value;
        setDisplay(num);
        setNumber(num);
    }

    const changeOperation = (e) => {
        setOperation(e.target.value);
    }

    const clearAll = () => {
        setNumber(DEFAULT_VALUE);
        setOperation(DEFAULT_OPERATOR);
        setDisplay(DEFAULT_VALUE);
        setResult(DEFAULT_VALUE);
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