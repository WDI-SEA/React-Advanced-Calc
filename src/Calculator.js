import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    //
    state={
        resultBox: "",
        operator: null,
        newNum: false,
        total: null
    }

    setOperator = (e) => {
        this.setState({
            total: this.state.resultBox,
            operator: e.target.innerText,
            newNum: true
            
        })
        console.log(e.target.innerText)
    }

    
    handleNumClick = (num) => {
        //prints clicked number to console
        console.log("I just clicked:", num.target.innerText) 
        if(this.state.newNum===true){
            this.setState({
                resultBox: num.target.innerText,
                newNum: false
            })
        }else {
        this.setState({
            resultBox: this.state.resultBox + num.target.innerText

        })
    }
    }
     operate = () => {
        switch(this.state.operator){
            case '+':
                return parseFloat(this.state.resultBox) + parseFloat(this.state.total)

            case '-':
                 return +this.state.total - +this.state.resultBox
            
            case '/':
              return +this.state.total / +this.state.resultBox

            case 'x':
               return +this.state.resultBox * +this.state.total

            default:
                console.log("defaulting")
        }
     }
    calculate = () => {
        let solution = +this.operate()
        console.log("this is the solution:", solution)
        this.setState({
            resultBox: solution,
            newNum: true
        })
        
    }

    clear = (e) => {
        this.setState({
            resultBox: []
        })
    }
    
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.resultBox}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"onClick={this.clear}>AC</button>
                    <button className="calc-button calc-button-top"onClick={this.setOperator}>+/-</button>
                    <button className="calc-button calc-button-top"onClick={this.setOperator}>%</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNumClick}>7</button>
                    <button className="calc-button"onClick={this.handleNumClick}>8</button>
                    <button className="calc-button"onClick={this.handleNumClick}>9</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.handleNumClick}>4</button>
                    <button className="calc-button"onClick={this.handleNumClick}>5</button>
                    <button className="calc-button"onClick={this.handleNumClick}>6</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={this.handleNumClick}>1</button>
                    <button className="calc-button"onClick={this.handleNumClick}>2</button>
                    <button className="calc-button"onClick={this.handleNumClick}>3</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={this.handleNumClick}>0</button>
                    <button className="calc-button"onClick={this.handleNumClick}>.</button>
                    <button className="calc-button calc-button-op"onClick={this.calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator