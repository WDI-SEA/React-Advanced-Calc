import React, { useState } from 'react'

const Calculator = () => {
    //use state
    let [values, setValues] = useState([])
    let [currentValue, setCurrentValue] = useState('0')
    let [lastClickedOperator, setLastClickedOperator] = useState('add')
    let [result, setResult] = useState('')

    //functions needed
    //addValues
    //subtractValues
    //multiplyValues
    //divideValues
    //clearState
    //showResult
        //if last clicked operator = add
                //addValues
        //if last clicked operator = sub
                //subtractValues
        //if last clicked operator = multiply
                //multiplyValues
        //if last clicked operator = divide
                //divideValues

    return(
        <div>
            <div id="screen">
                <h1>{currentValue}</h1>
            </div>
            <div className="row">
                <button>AC</button>
                {/* onClick=clearState */}
                <button>+</button>
                {/* onClick= set values state from currentValues, reset currentvalue, set lastclickedoperator to add */}
                <button>-</button>
                {/* onClick= set values state from currentValues, reset currentvalue, set lastclickedoperator to sub */}
                <button>/</button>
                {/* onClick= set values state from currentValues, reset currentvalue, set lastclickedoperator to divide */}
                <button>*</button>
                {/* onClick= set values state from currentValues, reset currentvalue, set lastclickedoperator to multiply */}
                <button>=</button>
                {/* onClick=showResult */}
            </div>
            <div className="row">
                <button
                    onClick={e => setCurrentValue(currentValue + '0') }
                >0</button>
                
                <button
                    onClick={e =>  setCurrentValue(currentValue + '1') }
                >1</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '2') }
                >2</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '3') }
                >3</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '4') }
                >4</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '5') }
                >5</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '6') }
                >6</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '7') }
                >7</button>
                
                <button
                    onClick={e => setCurrentValue(currentValue + '8') }
                >8</button>

                <button
                    onClick={e => setCurrentValue(currentValue + '9') }
                >9</button>
                

            </div>
        </div>
    )

}


export default Calculator