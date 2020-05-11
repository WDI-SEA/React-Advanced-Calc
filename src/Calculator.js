import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    let [equation, setEquation] = useState() 
    let [nums, setNums] = useState()  
    let [newNums, setNewNums] = useState()
    let [operators, setOperators] = useState()

    // function mergeArrays(a, b) {
    //     let result = []
    //     while (a.length && b.length) {
    //       result.push(a.shift(), b.shift())
    //     }
    //     return result.concat(a, b)
    //   }

    

    const handleNums = (event) => {
        event.preventDefault()
       if (operators) {
           if (newNums) {
               setNewNums(newNums + event.target.value)
            //    for (let i = 1; i < operators.length; i++) { 
            //        if (operators[i]) {
            //             let results = ((nums + operators + newNums[i]).split(operators))
            //             console.log(results)
            //         }
            //    }
            }
            else {
                setNewNums(event.target.value)
            }
            console.log('NEW NUMBER: ', newNums)  
       }
       else {
           if (nums) {
              setNums(nums + event.target.value)
          }
          else {
              setNums(event.target.value)
          }
       }
       // handleEquation()
    }

    const handleZero = (event) => {
        if (!nums) {
            setNums(event.target.value + '.')
        }
        else if (nums && !newNums) {
            setNums(nums + event.target.value)
        } 
        
        if (nums && operators && newNums) {
            setNewNums(newNums + event.target.value)
        } 
        else if (nums && operators && !newNums) {
            setNewNums(event.target.value + '.')
        }
        // handleEquation()
    }

    const handleDecimal = (event) => {
        if (!nums) {
            setNums(0 + event.target.value)
        }
        else if (nums && !newNums) {
            if (!newNums && !operators && !nums.includes(event.target.value)) {
                setNums(nums + event.target.value)
            }
            else {
                alert('Only one decimal allowed per number')
            }
        }
        if (nums && operators) {
            setNewNums(0 + event.target.value)
        }
        if (newNums) {

            if (newNums.includes(event.target.value)) {
                alert('Only one decimal allowed per number')
            }
            else {
                setNewNums(newNums + event.target.value)
            }
        }
    }

    console.log('NUMBERS: ', nums)

    const handleOperators  = (event) => {
        // if (nums) {
        //     if (operators) {
        //         setOperators((operators + ',' + event.target.value).split(','))
        //     }
        //     else {
        //         setOperators([event.target.value])
        //     }
        // }
        if (nums) {
            setOperators(event.target.value)
        } 
        else {
            alert('Enter a number first!')
        }
        if(newNums) {
            setNewNums()
            setOperators(event.target.value)
        }
    }
    
    console.log('OPERATORS: ', operators)
    
    // const handleEquation = () => {
    //     console.log('Equation: ', equation)
    //     if (nums) {
    //         setEquation(nums) 
    //     }
    //     if (operators) {
    //         setEquation(nums + operators)
    //     }
    //     if (newNums !== undefined) {
    //         setEquation(nums + operators + newNums)
    //     }
    //     return equation
        
    // }  

    
    const clearAll = (event) => {
        setEquation()
        setNums()
        setNewNums()
        setOperators()
    }

    const posNeg = (event) => {
            if (nums) {
                setNums(-(nums))
            } else if (nums && operators && newNums) {
                if (operators === ' + ') {
                    setNums(-(nums)) 
                    setNewNums(-(newNums))
                    
                }
                
                console.log('Negative value set', equation)
            }
    }

    

    const handleParenth = (event) => {
        if (nums && operators && newNums) {
            setNums('(' + (nums + operators + newNums) + ')')
            setOperators()
            setNewNums()
        }
        else if (nums && !operators && !newNums) {
            setNums('(' + nums + ')')
        }
        else {
            alert('Missing number value')
        }
        
    }

    const handleSquare = (event) => {
        if (nums && !operators && !newNums) {
            setNums((nums * nums).toFixed(1))
        }
        else {
            alert('Can only square one value')
        }
    }

    const handleSqrt = (event) => {
        if (nums && !operators && !newNums) {
            setNums(Math.pow(nums, 0.5).toFixed(2))
        }
        else {
            alert('Can only find the square root of one value')
        }
    }

    const handleFact = (event) => {
        if (nums && !operators && !newNums) {
            let i, fact;
            fact = 1 ;
            for (let i = 1; i <= nums; i++) {
            fact = fact*i;
            }  
            console.log('Factorial: ', fact)
            setNums(fact)
        }
        else {
            alert('Can only find the factorial of one number')
        }
    }

    const handleSolution = () => {
        let equation = (nums + operators + newNums)
        // const newEquation = equation.split(' ')
        // console.log(newEquation)
        // for (let i = 0; i < newEquation.length; i++) {
        //     if (isNaN(newEquation[i]) === false) {
        //         setNums([newEquation[i]])
        //         console.log(nums)
        //     }
        // }
        if (!nums) {
            alert('Enter a value')
        }
        else if (!operators && !newNums) {
            let equation = nums
            setEquation(equation)
            console.log('hello', equation)
            setEquation(eval(equation).toFixed(1))
            setNums(eval(equation).toFixed(1))
        } 
        else {
            setEquation(equation)
            console.log('hello', equation)
            setEquation(eval(equation).toFixed(1))
            setNums(eval(equation).toFixed(1))
        }
        
        setNewNums()
        setOperators()
        if (operators) {
            setNums(eval(equation).toFixed(1))
        }
    }

    return (
        <div className="container">
            <div className="calc-container">
            <h2>React Calculator  v2.0</h2>
                
                <div className="answer-box">
                    <p>
                        {nums}{operators}{newNums}
                    </p>
                </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clearAll}>AC</button>
                    <button className="calc-button calc-button-top" onClick={posNeg}>+/-</button>
                    <button className="calc-button calc-button-top" value=" % " onClick={handleOperators}>%</button>
                    <button className="calc-button calc-button-top" onClick={handleParenth}>( )</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleSquare}>x<sup>2</sup></button>
                    <button className="calc-button calc-button-top" onClick={handleSqrt}>√x</button>
                    <button className="calc-button calc-button-top" onClick={handleFact}>n!</button>
                    <button className="calc-button calc-button-op" value=" / " onClick={handleOperators}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" type="number" onClick={handleNums} value="7">7</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="8">8</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="9">9</button>
                    <button className="calc-button calc-button-op" value=" * " onClick={handleOperators}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" type="number" onClick={handleNums} value="4">4</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="5">5</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="6">6</button>
                    <button className="calc-button calc-button-op" value=" - " onClick={handleOperators}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" type="number" onClick={handleNums} value="1">1</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="2">2</button>
                    <button className="calc-button" type="number" onClick={handleNums} value="3">3</button>
                    <button className="calc-button calc-button-op"  value=" + " onClick={handleOperators}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" type="number" value="0" onClick={handleZero}>0</button>
                    <button className="calc-button" value="." onClick={handleDecimal}>.</button>
                    <button className="calc-button calc-button-op" onClick={handleSolution}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator