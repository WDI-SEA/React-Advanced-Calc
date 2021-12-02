import React, { Component } from 'react'
const SUM = 1
const MINUS = 2
const MULTIPLY = 3
const DIVIDE = 4
class Calculator extends Component {
    // Declare state variables
    state = {
        saved: 0,
        input: [],
        operator: 0,
        total: []
    }
    displayInput = () => {
        if (this.state.input.length < 1){
            return this.state.saved
        }
        return this.state.input
    }
    recordNumber = (e) => {
        const input = this.state.input.slice(0)
        input.push(e.target.value)
        this.setState({
            input: input
        })
    }

    recordOperator = (operator) => {
        console.log(operator)
        this.evaluate()
        this.setState({
            operator: operator
        })
    }

    evaluate = () => {
        if (this.state.input.length > 0){
        if (this.state.operator === SUM) {
            this.setState({
                saved: this.state.saved + parseInt(this.state.input.join('')),
            })
        }
        else if (this.state.operator === MINUS) {
            this.setState({
                saved: this.state.saved - parseInt(this.state.input.join(''))
            })
        }
        else if (this.state.operator === MULTIPLY) {
            this.setState({
                saved: this.state.saved * parseInt(this.state.input.join(''))
            })
        }
        else if (this.state.operator === DIVIDE) {
            this.setState({
                saved: this.state.saved / parseInt(this.state.input.join(''))
            })
        }
        else{
            this.setState({
                saved: parseInt(this.state.input.join(''))
            })
        }
        this.setState({
            input: []
        })
        console.log(this.state.saved)
    }
}
        // numberClick = (e) => {
        //     e.preventDefault()
        //     const newNumArray = this.state.input.slice(0)
        //     newNumArray.push(e.target.value)
        //     this.setState({
        //         input: newNumArray
        //     })
        // }
        // sum = () => {
        //     let newNum = parseInt(this.state.input.join(''))
        //     let input = this.state.input
        //     let operator = this.state.operator
        //     this.setState({
        //         operator: 1,
        //         saved: newNum,
        //         input: []
        //     })
        // }

        // subtract = () => {
        //     let newNum = parseInt(this.state.input.join(''))
        //     this.setState({
        //         operator: 2,
        //         saved: newNum,
        //         input: []
        //     })
        // }

        // divide = () => {
        //     let newNum = parseInt(this.state.input.join(''))
        //     this.setState({
        //         operator: 3,
        //         saved: newNum,
        //         input: []
        //     })
        // }

        // multiply = () => {
        //     let newNum = parseInt(this.state.input.join(''))
        //     this.setState({
        //         operator: 4,
        //         saved: newNum,
        //         input: []
        //     })
        // }
        // equals = () => {
        //     if (this.state.operator === 1){
        //         this.setState({
        //             saved: this.state.saved + Number(this.state.input.join('')),
        //         })
        //         console.log(this.state.saved)
        //     }
        //     else if(this.state.operator === 2){
        //         this.setState({
        //             saved: this.state.saved - Number(this.state.input.join(''))
        //         })
        //     }
        //     else if(this.state.operator === 3){
        //         this.setState({
        //             saved: this.state.saved / Number(this.state.input.join(''))
        //         })
        //     }
        //     else if(this.state.operator === 4){
        //         this.setState({
        //             saved: this.state.saved * Number(this.state.input.join(''))
        //         })
        //     }

        // }
        clear = () => {
            this.setState({
                saved: 0,
                input:[],
                total: [],
                operator: 0
            })
        }

        render() {
            return (
                <div className="container">
                    <h1>React Calculator</h1>
                    <div className="calc-container">
                        <p>Values: </p>
                        <div className="answer-box">{this.displayInput()}</div>
                        <div className="calc-row">
                            <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                            <button className="calc-button calc-button-top">+/-</button>
                            <button className="calc-button calc-button-top">%</button>
                            <button onClick={() => this.recordOperator(DIVIDE)}className="calc-button calc-button-op">/</button>
                        </div>
                        <div className="calc-row">
                            <button onClick={this.recordNumber} value='7' className="calc-button">7</button>
                            <button onClick={this.recordNumber} value='8' className="calc-button">8</button>
                            <button onClick={this.recordNumber} value='9' className="calc-button">9</button>
                            <button onClick={() => this.recordOperator(MULTIPLY)}value='*' className="calc-button calc-button-op">x</button>
                        </div>
                        <div className="calc-row">
                            <button onClick={this.recordNumber} value='4' className="calc-button">4</button>
                            <button onClick={this.recordNumber} value='5' className="calc-button">5</button>
                            <button onClick={this.recordNumber} value='6' className="calc-button">6</button>
                            <button onClick={() => this.recordOperator(MINUS)}value='-' className="calc-button calc-button-op">-</button>
                        </div>
                        <div className="calc-row">
                            <button onClick={this.recordNumber} value='1' className="calc-button">1</button>
                            <button onClick={this.recordNumber} value='2' className="calc-button">2</button>
                            <button onClick={this.recordNumber} value='3' className="calc-button">3</button>
                            <button onClick={() => this.recordOperator(SUM)} value='+' name='input' className="calc-button calc-button-op">+</button>
                        </div>
                        <div className="calc-row">
                            <button onClick={this.recordNumber} value='0' className="calc-button width-2">0</button>
                            <button value='.' className="calc-button">.</button>
                            <button onClick={this.evaluate} value='=' className="calc-button calc-button-op">=</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default Calculator