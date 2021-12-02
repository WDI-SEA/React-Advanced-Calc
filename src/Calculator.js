import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        input: [],
        operation: '',
        savedInput: '',
        acceptingNewNum: false
    }

    // triggered when a number is clicked
    handleNumClick = (e) => {
        if (this.state.input.length === 0 && e.target.value === '0') {
            console.log('no leading 0s please')
        } else if (this.state.acceptingNewNum === true) {
            console.log('you have clicked an operator!')
            this.setState({
                input: [e.target.value],
                acceptingNewNum: false
            })
        } else {
            console.log('you clicked:', e.target.value)
            this.inputNum(e.target.value)
        }
    }

    // handle  +/- button
    handlePlusMinClick = () => {
        console.log('plusminus')
        console.log(this.state.input[0])
        const newInputArray = this.state.input
        if (this.state.input.length === 0 || this.state.input.join('') == 0) {
            console.log('need a number to do that')
        } else if (this.state.input[0] === '-') {
            newInputArray.shift()
            this.setState({
                input: newInputArray
            })
        } else {
            newInputArray.unshift('-')
            this.setState({
                input: newInputArray
            })
            
        }
    }

    // sets state to add 
    inputNum = (digit) => {
        this.setState({
            input: [...this.state.input, digit]
        })
    }

    handleOpClick = (e) => {
        console.log('you clicked:', e.target.value)
        this.setState({
            operation: e.target.value,
            acceptingNewNum: true
        })
        this.commitInput()
    }

    // save a number to a saved input
    commitInput = () => {
        this.setState({
            savedInput: this.state.input.join(''),
            // input: []
        })
    }

    // triggered when AC is clicked
    handleAcClick = () => {
        console.log('clicked AC')
        this.setState({
            input: [],
            operation: '',
            savedInput: '',
            acceptingNewNum: false
        })
    }

    // handle sum click
    handleEqualClick = () => {
        console.log('clicked equal')
        const currentInput = this.state.input.join('')
        if (this.state.operation === '+') {
            this.setState({
                input: [parseInt(this.state.savedInput) + parseInt(currentInput)]
            })
        } else if (this.state.operation === '-') {
            this.setState({
                input: [parseInt(this.state.savedInput) - parseInt(currentInput)]
            })
        } else if (this.state.operation === 'x') {
            this.setState({
                input: [parseInt(this.state.savedInput) * parseInt(currentInput)]
            })
        } else if (this.state.operation === '/') {
            this.setState({
                input: [parseInt(this.state.savedInput) / parseInt(currentInput)]
            })
        } else {
            this.setState({
                input: ['Select an operator before calculating.'],
                acceptingNewNum: true
            })
        }
    }


    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.input}</div>
                    <div className="calc-row">
                        <button onClick={this.handleAcClick} className="calc-button calc-button-top">AC</button>
                        <button onClick={this.handlePlusMinClick} className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button onClick={(e) => this.handleOpClick(e)}className="calc-button calc-button-op" value="/">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="7">7</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="8">8</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="9">9</button>
                        <button onClick={(e) => this.handleOpClick(e)}className="calc-button calc-button-op" value="x">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="4">4</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="5">5</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="6">6</button>
                        <button onClick={(e) => this.handleOpClick(e)}className="calc-button calc-button-op" value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="1">1</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="2">2</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="3">3</button>
                        <button onClick={(e) => this.handleOpClick(e)}className="calc-button calc-button-op" value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button width-2" value="0">0</button>
                        <button className="calc-button">.</button>
                        <button onClick={this.handleEqualClick}className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator