import React, { Component } from 'react'
import Button from './Button'

class Calculator extends Component {
    state = {
        operatorValue: [],
        currentNumber: [],
        previousNumber: [],
    }
    // Declare state variables

    // Helper Methods:
    // - Clear All State

    // - Set Number

    // Number Click Handlers
    // - This will have to retrieve the number that is currently clicked and set the state of current number
    numberClickHandler = (e) => {

        e.preventDefault()
        console.log("This is a number!", e.target.value)
        console.log("This is the current Number", this.state.currentNumber)
        const value = e.target.value
        // calling setState with prevState provides you with a snapshot
        if (this.state.currentNumber === 0 && e.target.value === 0){
            this.setState({
                currentNumber: []
            })
        } else if (this.state.currentNumber === 0 && e.target.value > 0) {
            this.setState({
                currentNumber: e.target.value
            })
        } else {
            this.setState({
                currentNumber: [...this.state.currentNumber, value]
            })      
        }
        
        console.log(this.state.currentNumber)
    }
    
    equalClickHandler = (e) => {
        console.log("Equal!")
        if (e.target.value === "=") {
            let operator = this.state.operatorValue
            switch(operator) {
                case 'MULTIPLY':
                    this.setState({
                        currentNumber: parseInt(this.state.currentNumber.join("")) * this.state.previousNumber
                    })
                    break;
                case 'DIVIDE':
                    this.setState({
                        currentNumber: parseInt(this.state.currentNumber.join("")) / this.state.previousNumber
                    })
                    break;
                case 'PLUS':
                    this.setState({
                        currentNumber: parseInt(this.state.currentNumber.join("")) + this.state.previousNumber
                    })
                    break;
                case 'MINUS':
                    this.setState({
                        currentNumber: parseInt(this.state.currentNumber.join("")) - this.state.previousNumber
                    })
                    break;
            }
        }
    }
    
    // Operator Handler (switch)
    operatorClickHandler = (e) => {
        e.preventDefault()

        console.log("This is a operator!", e.target.value)
        const operator = e.target.value
        this.setState({
            operatorValue: operator,
            previousNumber: parseInt(this.state.currentNumber.join("")),
            currentNumber: []
        })
            

        console.log(this.state.operatorValue)
        console.log("this should be concatenated", this.state.currentNumber)
        console.log(this.state.operatorValue, this.state.previousNumber, this.state.currentNumber)
    }

    clearState = (e) => {
        this.setState({
            operatorValue: '',
            previousNumber: [],
            currentNumber: []
        })
    }
    // Value Index 0 is
    //Make sure you are concatenating each number pressed until you get an operator!!!!!!

    // Equal Handler

//  0 then replace with with number afterwards

    // Key press handler for delete one (slicing)



render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.currentNumber}</div>
                <div className="calc-row">
                    <Button onClick={this.clearState}className="calc-button calc-button-top" name="AC" value="clear"/>
                    <Button className="calc-button calc-button-top" name="+/-" value="signed"/>
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-top" name="%" value="%"/>
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-op" name="/" value="DIVIDE"/>
                </div>
                <div className="calc-row">
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="7" value="7"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="8" value="8"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="9" value="9"/>
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-op" name="x" value="MULTIPLY"/>
                </div>
                <div className="calc-row">
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="4" value="4"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="5" value="5"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="6" value="6"/>
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-op" name="-" value="MINUS"/>
                </div>
                <div className="calc-row">
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="1" value="1"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="2" value="2"/>
                    <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="3" value="3"/>
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-op" name="+" value="PLUS"/>
                </div>
                <div className="calc-row">
                <Button onClick={this.numberClickHandler} className="calc-button calc-button-top" name="0" value="0"/>
                    <Button className="calc-button calc-button-top" name="." value="."/>
                    {/*might need a special click handler to run a floating point conversion*/}
                    <Button onClick={this.equalClickHandler} className="calc-button calc-button-top" name="=" value="="/>
                    {/*might need a special click handler to run an an equal function */}
                    <Button onClick={this.operatorClickHandler} className="calc-button calc-button-op" name="/" value="/"/>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator