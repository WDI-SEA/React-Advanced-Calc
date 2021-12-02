import React, { Component } from 'react'
import Display from './Display'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import Row4 from './Row4'
import Row5 from './Row5'

class Calculator extends Component {
    // Declare state variables
    state = {
        displayString: '',
        operand1: '',
        operand2: '',
        operator: ''
    }

    //write helper methods 

    //pushOperand()
    pushOperand = (num) => {
        if (this.state.operator === '') {
            this.setState({
                operand1: `${this.state.operand1}${num}`
            })
            console.log('operand1: ', this.state.operand1, 'operand2: ', this.state.operand2)
        } else {
            this.setState({
                operand2: `${this.state.operand2}${num}`
            })
            console.log('operand1: ', this.state.operand1, 'operand2: ', this.state.operand2)
        }
        
    }

    //pushDigit()
    pushDigit = (e) => {
        let digit = e.target.innerText
        let ds = this.state.displayString

        if (digit === '0' && ds === '') {
            this.setState({
                displayString: 'begin with a nonzero num'
            })
        } else {
            if (ds === 'begin with a nonzero num' && digit === '0') {
                this.setState({
                    displayString: this.state.displayString
                })
            } else if ((ds === 'begin with a nonzero num' && digit !== '0') || (ds==='+' || ds==='-' || ds==='x' || ds==='/' || ds==='%')) {
                this.setState({
                    displayString: digit
                })
                this.pushOperand(digit)
            } else {
                this.setState({
                    displayString: `${ds}${digit}`
                })
                this.pushOperand(digit)
            }
        }
    
    }

    //setOperator()
    setOperator = (e) => {
        let num2 = this.state.operand2
        let op = e.target.innerText
        if (num2) {
        
        } else if (!num2) {
            let op = e.target.innerText
            this.setState({
                operator: op,
                displayString: op
            })
        }
        console.log('thsi.state.operator:', this.state.operator)
    }
    

    //calculate()
    calculate = () => {
        let solution
        let op1 = parseInt(this.state.operand1)
        let op2 = parseInt(this.state.operand2)
        switch (this.state.operator) {
            case '+' :
                solution = op1 + op2
                break
            case '-' :
                solution = op1 - op2
                break
            case 'x' :
                solution = op1 * op2
                break
            case '/' :
                solution = op1 / op2
                break
            case '%' :
                solution = op1 % op2
                break
            default: 
                console.log('no operator')
        }

        this.setState({
            displayString: solution,
            operand1: solution,
            operand2: '',
            operator: ''
        })
    }

    //allClear()
    allClear = () => {
        this.setState({
            displayString: '',
            operand1: '',
            operand2: '',
            operator: ''
        })
    }


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <Display number={this.state.displayString}/>
                <div className="calc-row">
                    <Row1 op={this.setOperator} clear={this.allClear}/>
                </div>
                <div className="calc-row">
                    <Row2 pd={this.pushDigit} op={this.setOperator}/>
                </div>
                <div className="calc-row">
                    <Row3 pd={this.pushDigit} op={this.setOperator}/>
                </div>
                <div className="calc-row">
                    <Row4 pd={this.pushDigit} op={this.setOperator}/>
                </div>
                <div className="calc-row">
                    <Row5 pd={this.pushDigit} calc={this.calculate}/>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator