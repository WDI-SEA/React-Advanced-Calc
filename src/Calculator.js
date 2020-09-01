import React, { useState } from 'react'
import commafy from './Commafy'



const Calculator = props => { 
    // Declare state variables
    let [value, setValue] = useState('0')
    let [results, setResults] = useState(null)
    let [operator,setOperator] = useState(null)

    const handlePress = content => () => {
       const num = parseFloat(value)

       if (content ==="AC"){
           setValue('0')
           setResults(null)
           setOperator(null)
           return;
       }

       if (content === '+') {
           if(operator !== null){
               if (operator === '+'){
                    setResults(results + parseFloat(value))
                } else if (operator === '-'){
                    setResults(results - parseFloat(value))
                } else if (operator === 'x'){
                    setResults(results - parseFloat(value))
                } else if (operator === '/'){
                    setResults (results- parseFloat(value))
                } 
            } else {
                setResults(parseFloat(value))
            }
                setValue('0')
                setOperator('+')
                return
            }
        if (content === '-') {
            if(operator !== null){
                if (operator === '+'){
                    setResults(results + parseFloat(value))
                } else if (operator === '-'){
                    setResults(results - parseFloat(value))
                } else if (operator === 'x'){
                    setResults(results - parseFloat(value))
                } else if (operator === '/'){
                    setResults (results- parseFloat(value))
                } 
            } else {
                setResults(parseFloat(value))
            }
                setValue('0')
                setOperator('-')
                return
                }
        if (content === '*') {
            if(operator !== null){
                if (operator === '+'){
                        setResults(results + parseFloat(value))
                    } else if (operator === '-'){
                        setResults(results - parseFloat(value))
                    } else if (operator === 'x'){
                        setResults(results - parseFloat(value))
                    } else if (operator === '/'){
                        setResults (results- parseFloat(value))
                    } 
            } else {
                setResults(parseFloat(value))
            }
                setValue('0')
                setOperator('*')
                return
                }  
        if (content === '/') {
            if(operator !== null){
                if (operator === '+'){
                    setResults(results + parseFloat(value))
                } else if (operator === '-'){
                    setResults(results - parseFloat(value))
                } else if (operator === 'x'){
                    setResults(results - parseFloat(value))
                } else if (operator === '/'){
                    setResults (results- parseFloat(value))
                } 
            } else {
                setResults(parseFloat(value))
            }
                setValue('0')
                setOperator('/')
                return
                }   
        if (content === '='){
            if (!operator)
            return
            if(operator === '+'){
                setValue((results + parseFloat(value)).toString())
            } else if(operator === '-'){
                setValue((results - parseFloat(value)).toString())
            } else if(operator === 'x'){
                setValue((results * parseFloat(value)).toString())
            }else if(operator === '/'){
                setValue((results / parseFloat(value)).toString())
            }
            setResults(null)
            setOperator(null)
            return
        }
        if(value[value.length - 1]==='.') {
            setValue (value + content)
        } else {
            setValue(parseFloat(num + content).toString())
        }    
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Value: </p>
                <div className="answer-box">{commafy(value)}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handlePress} type="function" content='AC'>AC</button>
                    <button className="calc-button calc-button-top" onClick={handlePress} type="function" content='+/-'>+/-</button>
                    <button className="calc-button calc-button-top" onClick={handlePress} type="function" content='%'>%</button>
                    <button className="calc-button calc-button-op" onClick={handlePress} type="operator" content='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress}  content='7'>7</button>
                    <button className="calc-button" onClick={handlePress}  content='8'>8</button>
                    <button className="calc-button" onClick={handlePress}  content='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={handlePress} type="operator" content='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress}  content='4'>4</button>
                    <button className="calc-button" onClick={handlePress}  content='5'>5</button>
                    <button className="calc-button" onClick={handlePress}  content='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={handlePress} type="operator" content='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handlePress}  content='1'>1</button>
                    <button className="calc-button" onClick={handlePress}  content='2'>2</button>
                    <button className="calc-button" onClick={handlePress}  content='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={handlePress} type="operator" content='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handlePress}  content='0'>0</button>
                    <button className="calc-button" onClick={handlePress} content='.'>.</button>
                    <button className="calc-button calc-button-op" onClick={handlePress} type="operator" content='='>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator