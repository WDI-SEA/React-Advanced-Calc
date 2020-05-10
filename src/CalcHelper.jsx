import React, { useState } from 'react';
import * as mathFn from 'mathjs';
import Calculator from './Calculator';

const CalcHelper= props=> {
     // Declare state variables
     const ZERO = '0';
     const DECIMAL_DOT ="."
     const EQUALS = "="
     const PLUS_MINUS = "+/-"
     const NEGATIVE = "-"
     let [equation,setEquation] = useState([])
     let [expression,setExpression]= useState('')
     let [equalTo, setEqualTo] = useState('')
     let [operatorObjs,setOperatorObjs] = useState([]) 
     let [isDecimalDot, setIsDecimalDot] = useState(false)
     let [isNegative, setIsNegative] = useState(false)
   
 //returns true if val is an integer positive or negative from 0 to 9
    const isNumber=(val)=>{
        if (val==0) return true;
        else{ for(let i=1;i<=9;i++){
                    if(val == i || val == (i*-1)){
                        return true;
                    }
                }
            }
        return false;  
    }

 // returns true if val is an operator
    const isOperator=(value)=>{
         if(value==="+" || value==="*" || value==="/" || value==="-"  || value==="%")
         return true;
         else
         return false;
    }
 
    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
      
 // store the expression as string and as equation in the array 
 const pushAndSet=(val)=>{
         equation.push(val)
         setEquation(equation)
         expression = expression+val
         setExpression(expression)
         let ifOperator = isOperator(val)
         if(ifOperator)
         {   let  operatorObj ={ type: val, indexInExpression: (expression.length-1),indexInEquation :(equation.length-1)}
             operatorObjs.push(operatorObj)
             console.log('operatorObjs',operatorObjs)
             setOperatorObjs(operatorObjs)
         }
         console.log("push and set expression",expression)
    }
     
 // clears the input
 const clear=()=>{
        expression=""
        equation = []
        operatorObjs = []
        setEquation(equation)
        setExpression(expression) 
        setOperatorObjs(operatorObjs)
    }  
 
 // After = is pressed, it resets the input
 const checkForEqualPressed=()=>{
         if(equalTo === EQUALS ){
             clear()
             equalTo = ''
             setEqualTo(equalTo)
         }
    }
    
 // For creating a valid expression    
 const createExpression=(e)=>{
         checkForEqualPressed()
         let val = e.target.value
         let prevVal= equation.slice(-1) // this returns an array containing the last element in the equation []
         console.log("button",val)
         console.log("check prev prevVal",prevVal)
         //when there is a decimal dot, just before any key is pressed
         if(isDecimalDot){
             if( !isOperator(val)){ // when values is 0-9, add it after decimal 
                 pushAndSet(val)
                 isDecimalDot = !isDecimalDot
                 setIsDecimalDot(isDecimalDot)
             }
         } else // when there is no decimal dot, just before any key is pressed
         {   // ensures that the first element is not zero, toggle switch for =or-
                 if(prevVal.length === 0  && val!== ZERO && val !== PLUS_MINUS)
                 {     if( !isOperator(val)) // ensures that first value is also not an operator
                         {   pushAndSet(val)  } 
                 }
                 else if( prevVal.length!== 0 && (!isOperator(prevVal[0]) || !isOperator(val)))
                 {   //before pushing check if the previous value (in the prevVal array at index 0) also is an operator . for ex. 2+ is there and now adding an extra + should not be allowed
                     pushAndSet(val)
                 }
         }
    }
 
 // For floating point    
 const handleDecimalDot=()=>{
        checkForEqualPressed()
        let zeroDecimal = "0."
        // When decimal is the first thing user clicked
        if(equation.length === 0){
             isDecimalDot = true
             setIsDecimalDot(isDecimalDot)
             pushAndSet(zeroDecimal)
        }
        else{
             let prevVal= equation.slice(-1)[0]; 
             // If there is any operator before decimal dot is pressed
            if (isOperator(prevVal) )
             { // ex. add 0. after + so it will be +0.
                 isDecimalDot = true
                 setIsDecimalDot(isDecimalDot)
                 pushAndSet(zeroDecimal)
             }
            else if(isNumber(prevVal))  // If there is any number before decimal dot is pressed
            {  // extract the number value after the operator and check if there is a decimal dot in the expression already, if not add the decimal dot after the number   
                let objArrayLength = operatorObjs.length;
                 if(objArrayLength)
                 {   let lastOperatorObj = operatorObjs[objArrayLength-1]
                     let index = lastOperatorObj.indexInExpression;
                     let extractedVal = expression.slice((index+1))
                     if(!extractedVal.includes(DECIMAL_DOT))
                     {   isDecimalDot = true
                         setIsDecimalDot(isDecimalDot)
                         pushAndSet(DECIMAL_DOT)
                     }
                 } else {
                        let stringExp = expression.toString()
                        if(!(stringExp.includes(DECIMAL_DOT))){
                            isDecimalDot = true
                            setIsDecimalDot(isDecimalDot)
                            pushAndSet(DECIMAL_DOT)
                     }
                 }
            }
        }
    }

 // toggling a number as positive or negative 
 const callPlusMinus=()=> {
        checkForEqualPressed()
        if(!isDecimalDot)
        {   let objArrayLength = operatorObjs.length;
            if(objArrayLength){
                let lastOperatorObj = operatorObjs[objArrayLength-1]
                let index = lastOperatorObj.indexInExpression;
                if(index !== (expression.length-1))
                {
                    let extractedVal = expression.slice((index+1))
                    extractedVal= extractedVal*-1;
                    let replaceExp = expression.slice(0, (index+1))
                    expression =replaceExp +extractedVal
                    setExpression(expression)
                    let indInEquation = lastOperatorObj.indexInEquation;
                    if(!isNegative){  equation.splice((indInEquation+1),0,NEGATIVE)   }
                    else if(isNegative){ equation.splice((indInEquation+1),1) }
                    setEquation(equation)
                    isNegative = !isNegative
                    setIsNegative(isNegative)
                }
            } else 
                {     if(expression){
                        expression = expression * -1;
                        setExpression(expression)
                        if(!isNegative){   equation.unshift(NEGATIVE)  }
                        else if(isNegative){ equation.shift()  }
                        setEquation(equation)
                        isNegative = !isNegative
                        setIsNegative(isNegative)
                    }
                }
            }
    }

 //for evaluating the expression 
const compute=()=>{
         if(expression){
             let ans= mathFn.evaluate(expression)
             if(ans !== Infinity) 
             {  ans = round(ans,6) }
             console.log('exp ans',ans)
             setExpression(ans)
             equalTo = EQUALS
             setEqualTo(equalTo)
         }
    }

 return(
          <div>
              <Calculator  expression= {expression} compute={compute} clear ={clear} createExpression={createExpression} handleDecimalDot={handleDecimalDot} callPlusMinus={callPlusMinus}/>
          </div>
       )
}

export default CalcHelper