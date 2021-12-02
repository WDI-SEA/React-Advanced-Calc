import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        firstNumbers: '',
        secondNumbers: '',
        operator: '',
        sum: ''
    }

    handleNumber = (clicked) => {
        const calcFunctions = ['/', '+', '*', '-']
        let buttonValue = clicked.target.value
        //for checking
        // console.log('this is click button', clicked)
        // console.log('this is buttonV', buttonValue)
         if (!this.state.operator) {
            this.setState({
                firstNumbers: this.state.firstNumbers += buttonValue 
            })
        } else {
            this.setState({
                secondNumbers: this.state.secondNumbers += buttonValue
            })
        }

        if(calcFunctions[0] == clicked) {
            this.setState({
                
            })
        }
    }
    
    equalButton = () => {
        this.setState ({
            sum: eval(this.state.firstNumbers + this.state.operator + this.state.secondNumbers)
        })
    }


    clear = () => {
        this.setState({
            numbersToCalc: [],
            num: []
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.firstNumbers}</div>
                <div className="calc-row">
                    <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.handleNumber} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.handleNumber} className="calc-button calc-button-top">%</button>
                    <button onClick={this.handleNumber} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button value='7' onClick={this.handleNumber} className="calc-button">7</button>
                    <button value='8' onClick={this.handleNumber}className="calc-button">8</button>
                    <button value='9'  onClick={this.handleNumber} className="calc-button">9</button>
                    <button onClick={this.handleNumber} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button value='4' onClick={this.handleNumber} className="calc-button">4</button>
                    <button value='5' onClick={this.handleNumber} className="calc-button">5</button>
                    <button value='6' onClick={this.handleNumber} className="calc-button">6</button>
                    <button onClick={this.handleNumber} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button value='1' onClick={this.handleNumber} className="calc-button">1</button>
                    <button value='2' onClick={this.handleNumber} className="calc-button">2</button>
                    <button value='3' onClick={this.handleNumber} className="calc-button">3</button>
                    <button name='plus' className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button value='0' onClick={this.handleNumber} className="calc-button width-2">0</button>
                    <button onClick={this.handleNumber} className="calc-button">.</button>
                    <button onClick={this.equalButton} name='equal' className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator