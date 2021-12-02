import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        symbol: "",
        input: [],
        inputTwo: [],
        operatorArray: [],
        results: null
        
    }
    // global variables to reference in any part of the code 

    // add things

    // subtract things

    // multiply things

    // divide things

    // recordNumber will keep the numbers in a array
    recordNumber = () => {

    }

    // recordOperator will store the operator selected
    resultsOfInput = (e) => {
        e.preventDefault()

        switch (this.state.symbol) {
            case "+":
                let sum = Number(this.state.input.join('')) + Number(this.state.inputTwo.join(''))
                this.setState({
                    results: sum
                })
                break;

            case "-":
                let subtractSum = Number(this.state.input.join('')) - Number(this.state.inputTwo.join(''))
                this.setState({
                    results: subtractSum
                })
                break;
            case "x":
                let product = Number(this.state.input.join('')) * Number(this.state.inputTwo.join(''))
                this.setState({
                    results: product
                })
                break;
            case "/":
                let quotient = Number(this.state.input.join('')) / Number(this.state.inputTwo.join(''))
                this.setState({
                    results: quotient
                })
                break;
            case "%":
                let mod = Number(this.state.input.join('')) % Number(this.state.inputTwo.join(''))
                this.setState({
                    results: mod
                })

            default:
                break;
        }

        console.log('these are the results: ', this.state.results);

    }
    


    // displayInput shows the user what they are inputting into the calc answer box 
    displayInput = (e) => {
        e.preventDefault()
        //console.log('You clicked', Number(e.target.innerText));
        if(this.state.operatorArray != "") {
            this.state.inputTwo.push(Number(e.target.innerText))
            this.setState({
                inputTwo: this.state.inputTwo
            })
        } else {

            this.state.input.push(Number(e.target.innerText))
            this.setState({
                input: this.state.input
            })
            if(this.state.input[0] == 0){
                console.log('You cannot start with 0!');
                this.setState({
                    input: []
                })
                
            }
        }
        console.log('this is input:', this.state.input);
        console.log('this is inputtwo:',this.state.inputTwo);
    }

    displayOperator = (e) => {
        e.preventDefault()
        this.state.input.push(this.state.operatorArray)
    }

    recordSymbol = (e) => {
        e.preventDefault()
        
        this.state.operatorArray = []
        this.state.operatorArray.push(e.target.innerText)
        this.setState({
            symbol: e.target.innerText
        })
        
        console.log('this is the current symbol:', this.state.operatorArray);
    }

    // clears the current input
    clearInput = (e) => {
        this.setState({
            inputTwo: [],
            input: [],
            results: null,
            symbol: "",
            operatorArray: []
        })
    }


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>
                    {`${this.state.input.join('')} ${this.state.operatorArray} ${this.state.inputTwo.join('')}`}
                </p>
                <div className="answer-box">
                    {this.state.results}
                    </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearInput}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.displayInput}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.recordSymbol}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.recordSymbol}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayInput}>7</button>
                    <button className="calc-button" onClick={this.displayInput}>8</button>
                    <button className="calc-button" onClick={this.displayInput}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.recordSymbol}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayInput}>4</button>
                    <button className="calc-button" onClick={this.displayInput}>5</button>
                    <button className="calc-button" onClick={this.displayInput}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.recordSymbol}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.displayInput}>1</button>
                    <button className="calc-button" onClick={this.displayInput}>2</button>
                    <button className="calc-button" onClick={this.displayInput}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.recordSymbol}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.displayInput}>0</button>
                    <button className="calc-button" onClick={this.displayInput}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.resultsOfInput} >=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator