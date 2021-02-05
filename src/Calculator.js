import React, { Component } from 'react'
import Number from './Number'

class Calculator extends Component {
    // Declare state variables
    state ={
        display: null, // String for a display of your input history. 
        numsArray: [], // Array of numbers.
        currentNum: '', // For storing current number (until operator is pressed)
        operator: null, // Currently only allowed to use one operator. Will have to display error message if user tries to use two.
        result: null,
        messages: ''
    }

    handleEvaluatorClick = () => { // For clicking = sign.
        console.log("Handling evaluator click")
        if (!this.state.operator || !this.state.currentNum) { // If it's just one number and there was no operator, OR if the last thing was an operator and as a result there's no currentNum.
            return
        }
        let array = this.state.numsArray
        array.push(parseFloat(this.state.currentNum))
        
        let display = (`${this.state.numsArray[0]} ${this.state.operator} ${this.state.numsArray[1]}`)

        let result = eval(`${this.state.numsArray[0]} ${this.state.operator} ${this.state.numsArray[1]}`)
            // result = result.toFixed(3) // Only want max of 3 decimal places, but would need to look at indexOf decimal point (if any) in display and see if there are more than 3 decimal points. Otherwise, you'll get values like 25.000.
        this.setState({
            result: result,
            numsArray: [],
            currentNum: '',
            operator: null,
            display: display,
            messages: ''
        })
        
    }
    handleOperatorClick = (e) => {
        console.log("Handling operator click", e.target.innerText)
        let operator = e.target.innerText
        if (e.target.innerText == "x") {
            operator = '*'
        }
        if (this.state.currentNum) { // If the previous button pressed was a number.
            let array = this.state.numsArray
            array.push(parseFloat(this.state.currentNum))

            let display = (`${this.state.numsArray[0]} ${operator}`)

            this.setState({
                numsArray: array,
                currentNum: '',
                operator: operator,
                display: display,
                messages: ''
            })
            console.log(this.state.currentNum)
        } else {
            this.setState({
                messages: "Only one operator can be selected at a time."
            })
        }
    }

    handleNumberClick = (e) => {
        // console.log("Handling number click")
        let num = e.target.innerText
        num = this.state.currentNum + num.toString()
        // this.setState({currentNum: num})
        if (!this.state.operator) { // If this is the first number
            if (num === '0') { // If the only digit so far is 0.
                return
            } else {
                this.setState({
                    currentNum: num,
                    display: num,
                    messages: ''
                })
            }
        } else {
            this.setState({
                currentNum: num,
                display: `${this.state.numsArray[0]} ${this.state.operator} ${num}`,
                messages: ''
            })
        }
        // console.log(this.state.currentNum)
        }

    handleClearClick = () => {
        this.setState({
            result: '', 
            display: '',
            numsArray: [],
            operator: '',
            currentNum: '',
            messages: ''
        })
    }

    handleDecimalClick = (e) => {
        console.log("Handling decimal click!")
        if (!this.state.currentNum) { // If this is a leading decimal. 
            this.updateDisplay('0.')
            this.setState({
                currentNum: '0.',
            })
        } else {
            let num = this.state.currentNum
            num = `${this.state.currentNum}.`
            this.setState({
                currentNum: num
            }) 
            this.updateDisplay()
        }
    }

    updateDisplay = (currentNum) => {
        if (this.state.operator) { // If an operator exists, ie the first number is complete.
            this.setState({
                currentNum: currentNum,
                display: `${this.state.numsArray[0]} ${this.state.operator} ${currentNum}`
            })
        } else {
            this.setState({
                currentNum: currentNum,
                display: currentNum
            })
        }
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p style={{minHeight: '18px'}}>{this.state.display}</p>
                <div className="answer-box">{this.state.result}</div>
                <div className="calc-row">
                    <button onClick={this.handleClearClick} 
                    className="calc-button calc-button-top">AC</button>

                    <button onClick={this.handleOperatorClick} 
                    className="calc-button calc-button-top">+/-</button>

                    <button onClick={this.handleOperatorClick} 
                    className="calc-button calc-button-top">%</button>

                    <button onClick={this.handleOperatorClick} 
                    className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    {[7,8,9].map( (number, index) => (
                        <Number number={number} 
                        key={`${number} ${index}`} 
                        handleNumberClick={this.handleNumberClick} />
                    ))}
                    {/* Above is the same as the below:
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button> */}

                    <button onClick={this.handleOperatorClick}
                    className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    {[4,5,6].map( (number, index) => (
                        <Number number={number} 
                        key={`${number} ${index}`} 
                        handleNumberClick={this.handleNumberClick} />
                    ))}
                    <button onClick={this.handleOperatorClick}
                    className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    {[1,2,3].map( (number, index) => (
                        <Number number={number} 
                        key={`${number} ${index}`} 
                        handleNumberClick={this.handleNumberClick} />
                    ))}
                    <button onClick={this.handleOperatorClick}
                    className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNumberClick} className="calc-button width-2">0</button>
                    <button onClick={this.handleDecimalClick}
                    className="calc-button">.</button>
                    <button onClick={this.handleEvaluatorClick}
                    className="calc-button calc-button-op">=</button>
                </div>
            </div>
            <div className="error-messages">{this.state.messages}</div>
        </div>
    )
}
}

export default Calculator