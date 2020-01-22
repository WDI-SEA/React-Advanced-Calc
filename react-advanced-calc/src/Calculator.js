import React, { useState } from 'react'

const Calculator = props => {
    // Setting variables
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [operator, setOperator] = useState('')
    let [answer, setAnswer] = useState('')

    const onNumClick = e => {
        console.log(e.target.value)
        setNum1(num1 + e.target.value)
    }

    const clear = e => {
        console.log('clear')
        setNum1('')
        setNum2('')
        setOperator('')
        setAnswer('')
    }

    const equals = e => {
        // answer = ''
        console.log('equals')
        console.log(num1)
        console.log(num2)
        setNum2(num2 + e.target.value)
        if (operator === '/') {
            answer = ((num1) / (num2))
        } else if (operator === 'X') {
            answer = ((num1) * (num2))
        } else if (operator === '+') {
            answer = ((num1) + (num2))
        } else if (operator === '-') {
            answer = ((num1) - (num2))
        }
        setAnswer(answer)
        console.log(answer)
    }

    const math = e => {
        if (e.target.value === '/') {
            console.log('divide')
            setOperator(operator + e.target.value)
        } else if (e.target.value === 'X') {
            console.log('multiply')
            setOperator(operator + e.target.value)
        } else if (e.target.value === '+') {
            console.log('add')
            setOperator(operator + e.target.value)
        } else if (e.target.value === '-') {
            console.log('subtract')
            setOperator(operator + e.target.value)
        }
    }

    return (
        <div className='calculator'>
            <h1>Advanced Calculator</h1>
                <div className='container'>
                    <div className='display'>{answer}</div>
                        <div className='calc-buttons'>
                            <button onClick={clear}>AC</button>
                            <button>+/-</button>
                            <button>%</button>
                            <button className='orange' onClick={math} value='/'>/</button>
                            <button onClick={onNumClick} value='7'>7</button>
                            <button onClick={onNumClick} value='8'>8</button>
                            <button onClick={onNumClick} value='9'>9</button>
                            <button className='orange' onClick={math} value='X'>X</button>
                            <button onClick={onNumClick} value='4'>4</button>
                            <button onClick={onNumClick} value='5'>5</button>
                            <button onClick={onNumClick} value='6'>6</button>
                            <button className='orange' onClick={math} value="-">-</button>
                            <button onClick={onNumClick} value='1'>1</button>
                            <button onClick={onNumClick} value='2'>2</button>
                            <button onClick={onNumClick} value='3'>3</button>
                            <button className='orange' onClick={math} value='+'>+</button>
                            <button></button>
                            <button onClick={onNumClick} value='0'>0</button>
                            <button>.</button>
                            <button className='orange' onClick={equals}>=</button>
                        </div>
                </div>
        </div>
    )
}

export default Calculator