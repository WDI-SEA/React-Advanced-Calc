import React, { useState } from 'react'

let DEFAULT_VALUE = 0;

const Face = props => {
    let [number, setNumber] = useState(DEFAULT_VALUE);
    let [operation, setOperation] = useState('');
    let [result, setResult] = useState(DEFAULT_VALUE);
    let [display, setDisplay] = useState(DEFAULT_VALUE);

    return (
        <div className="container">
            <div className="display">Display</div>
            <div className="numbers">
                <div>
                <button type="button" value={9}>9</button>
                <button type="button" value={8}>8</button>
                <button type="button" value={7}>7</button>
                </div>
                <div>
                <button type="button" value={6}>6</button>
                <button type="button" value={5}>5</button>
                <button type="button" value={4}>4</button>
                </div>
                <div>
                <button type="button" value={3}>3</button>
                <button type="button" value={2}>2</button>
                <button type="button" value={1}>1</button>
                </div>
                <button type="button" value={0}>0</button>
            </div>
            <div className="operations"></div>
        </div>
    )
}

export default Face