import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state={
        currentNum: 0,
        previousNum: 0,
        sum: 0,
        operator: ''
    }

    addingNum=(e)=>{
        let newNum=this.state.currentNum+e;
        if(parseInt(this.state.currentNum)==parseInt(this.state.previousNum)){
            this.setState({ currentNum: e })
        }else{
            this.setState({ currentNum: newNum});
        }
    }
    
    setOperator=(e)=>{
        let newNum;
        if(e=='+'){
            newNum=parseInt(this.state.currentNum)+parseInt(this.state.previousNum);
        } else if (e=='-'){
            newNum=parseInt(this.state.currentNum)-parseInt(this.state.previousNum);
        } else if (e=='*'){
            newNum=parseInt(this.state.currentNum)*parseInt(this.state.previousNum);
        } else if (e=='/'){
            newNum=parseInt(this.state.currentNum)/parseInt(this.state.previousNum);
        }
        this.setState({
            currentNum:newNum,
            previousNum: newNum,
            operator: e
        })
    }

    finalNum=()=>{
        let newNum;
        if(this.state.operator=='+'){
            newNum=parseInt(this.state.previousNum)+parseInt(this.state.currentNum);
        } else if (this.state.operator=='-'){
            newNum=parseInt(this.state.previousNum)-parseInt(this.state.currentNum);
        } else if (this.state.operator=='*'){
            newNum=parseInt(this.state.previousNum)*parseInt(this.state.currentNum);
        } else if (this.state.operator=='/'){
            newNum=parseInt(this.state.previousNum)/parseInt(this.state.currentNum);
        }
        this.setState({
            currentNum: newNum,
            previousNum: newNum
        })
    }
    
    clearCalc=()=>{
        this.setState({
            currentNum: 0,
            previousNum: 0
        })
    }

    percent=()=>{
        let newNum=parseInt(this.state.currentNum)/100;
        this.setState({
            currentNum: newNum,
            previousNum: newNum
        })
    }
    
    /*
    subNum=()=>{
        this.setState({sum: (parseInt(this.state.num1)-parseInt(this.state.num2)});
    }

    mulNum=()=>{
        this.setState({sum: (parseInt(this.state.num1)*parseInt(this.state.num2)});
    }

    divNum=()=>{
        this.setState({sum: (parseInt(this.state.num1)/this.state.num2)});
    }
    */

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.currentNum}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearCalc}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.percent}>%</button>
                    <button className="calc-button calc-button-op" onClick={(e)=>this.setOperator('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e)=>this.addingNum('7')}>7</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('8')}>8</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('9')}>9</button>
                    <button className="calc-button calc-button-op" onClick={(e)=>this.setOperator('*')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e)=>this.addingNum('4')}>4</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('5')}>5</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('6')}>6</button>
                    <button className="calc-button calc-button-op" onClick={(e)=>this.setOperator('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e)=>this.addingNum('1')}>1</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('2')}>2</button>
                    <button className="calc-button" onClick={(e)=>this.addingNum('3')}>3</button>
                    <button className="calc-button calc-button-op" onClick={(e)=>this.setOperator('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e)=>this.addingNum('0')}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" onClick={this.finalNum}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator