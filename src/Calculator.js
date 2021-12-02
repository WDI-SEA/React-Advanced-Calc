import React, { Component } from 'react'

class Calculator extends Component {
// Declare state variables
    state ={
        output:""
    }

//Helper Methods 
    //function to clear window
    allClear = (e) =>{
        e.preventDefault()
        console.log("cleared!")
        this.setState({
            output:""
            
        })

    }

    //function to select value
    numSelect = (e) => {
        e.preventDefault ()
        console.log("this has been selected", e.target)
        console.log(this.state.output)
        let number = e.target.value
            this.setState({
            output:this.state.output+ number
        })
    }
    //function to calculate
    calculate = (e) =>{
        e.preventDefault()
        console.log("this is calculate", e.target)
        this.setState({
            output: eval(this.state.output)
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.output}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op"value="/" onClick={this.numSelect}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={this.numSelect}>7</button>
                    <button className="calc-button" value="8" onClick={this.numSelect}>8</button>
                    <button className="calc-button" value="9" onClick={this.numSelect}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={this.numSelect}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={this.numSelect}>4</button>
                    <button className="calc-button" value="5" onClick={this.numSelect}>5</button>
                    <button className="calc-button" value="6" onClick={this.numSelect}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={this.numSelect}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={this.numSelect}>1</button>
                    <button className="calc-button" value="2" onClick={this.numSelect}>2</button>
                    <button className="calc-button" value="3" onClick={this.numSelect}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={this.numSelect}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="0 "onClick={this.numSelect}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={this.calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator