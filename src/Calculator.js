import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state={
        input:'',
        number:'',
        nums:[],
        result:"TBD"
    }
    findNumber=(num)=>{
        if(!this.state.number=='' || num!=="0"){
            let inputTemp=this.state.input+num
            let numTemp=this.state.number+num
            this.setState({number:numTemp})
            this.setState({input:inputTemp})
        }
    }
    findOperator=(op)=>{
        if(!this.state.number==''){
            let tempArr=this.state.nums
            tempArr.push(parseInt(this.state.number))
            this.setState({nums:tempArr, number:''})
            let inputTemp=this.state.input+op
            this.setState({input:inputTemp})
        }
    }
    findResult=()=>{

    }
    clearInput=()=>{
        this.setState({input:'',number:'',nums:[],result:'TBD'})
        console.log(this.state.input)
    }
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{this.state.input}</p>
                <div className="answer-box">{this.state.result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=>this.clearInput()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.findOperator("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.findNumber("7")}>7</button>
                    <button className="calc-button" onClick={()=>this.findNumber("8")}>8</button>
                    <button className="calc-button" onClick={()=>this.findNumber("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("x")}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.findNumber("4")}>4</button>
                    <button className="calc-button" onClick={()=>this.findNumber("5")}>5</button>
                    <button className="calc-button" onClick={()=>this.findNumber("6")}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("-")}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.findNumber("1")}>1</button>
                    <button className="calc-button" onClick={()=>this.findNumber("2")}>2</button>
                    <button className="calc-button" onClick={()=>this.findNumber("3")}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("+")}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>this.findNumber("0")}>0</button>
                    <button className="calc-button" onClick={()=>this.findNumber(".")}>.</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findResult("=")}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator