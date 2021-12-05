import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        input: [], 
        operator: '',
        savedNum: null,
        zero: 0, 
        one: 1, 
        two: 2,
        three: 3, 
        four: 4,
        five: 5, 
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        point: '.'
    }
    
    // helper functions
    addToEquation = (e) => {
        // console.log('this is what was clicked', e.target.value)
        let number = e.target.value
        if(this.state.input[0] != '0'){
            this.setState({
                input:[
                    ...this.state.input,
                    number
                ]
            })
        }
    }

    allClear = () => {
        this.setState({
            input: [],
            operator: ''
        })
    }

    // positiveNegative = () => {

    // }

    pickOperator = (e) => {
        console.log('this is the operator: ', e.target.value)
        console.log('this is savedNum: ', parseInt(this.state.input.join("")))
        let operator = e.target.value
        this.setState({
            operator: operator
        })
        this.setState({
            savedNum: parseInt(this.state.input.join(""))
        })
        this.setState({
            input: []
        })
        console.log('this is input', this.state.input)
    }

    solve = (e) => {
        // let firstNum = this.state.savedNum
        let secondNum = parseInt(this.state.input.join(""))
        console.log('this is secondNum:', secondNum)
        this.setState({
            input: [eval(this.state.savedNum + this.state.operator + secondNum)]
        }) 
    }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <div className="answer-box">{this.state.input}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top" onClick={this.pickOperator} value='%'>%</button>
                        <button className="calc-button calc-button-op" onClick={this.pickOperator} value='/'>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value={this.state.seven} onClick={this.addToEquation}>7</button>
                        <button className="calc-button" value={this.state.eight} onClick={this.addToEquation}>8</button>
                        <button className="calc-button" value={this.state.nine} onClick={this.addToEquation}>9</button>
                        <button className="calc-button calc-button-op" onClick={this.pickOperator} value='*'>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value={this.state.four} onClick={this.addToEquation}>4</button>
                        <button className="calc-button" value={this.state.five} onClick={this.addToEquation}>5</button>
                        <button className="calc-button" value={this.state.six} onClick={this.addToEquation}>6</button>
                        <button className="calc-button calc-button-op" onClick={this.pickOperator} value='-'>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" value={this.state.one} onClick={this.addToEquation}>1</button>
                        <button className="calc-button" value={this.state.two} onClick={this.addToEquation}>2</button>
                        <button className="calc-button" value={this.state.three} onClick={this.addToEquation}>3</button>
                        <button className="calc-button calc-button-op" onClick={this.pickOperator} value='+'>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" value={this.state.zero} onClick={this.addToEquation}>0</button>
                        <button className="calc-button" value={this.state.point} onClick={this.addToEquation}>.</button>
                        <button className="calc-button calc-button-op" onClick={this.solve}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator