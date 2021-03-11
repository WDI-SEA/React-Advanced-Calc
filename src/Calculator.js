import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state={
        input:'',
        number:'',
        result:"TBD"
    }
    findNumber=(num)=>{
        if(!this.state.input=='' || num!=="0"){
            if(num=='-'){

                this.setState({input:num+this.state.input})
                this.setState({number:num+this.state.number})
            }else{
                
                this.setState({number:this.state.number+num})
                this.setState({input:this.state.input+num})
            }
        }
    }
    findOperator=(op)=>{
        if(!this.state.input==''){
            this.setState({input:this.state.input+op})
            this.setState({number:''})
        }
    }
  
    findResult=()=>{

        let test=eval(this.state.input)
        this.setState({number:test})
        this.setState({input:test})
        console.log(test)

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
                <p>values: </p>
                <div className="answer-box">{this.state.number}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={()=>this.clearInput()}>AC</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.findNumber("-")}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.findOperator("%")}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("/")}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.findNumber("7")}>7</button>
                    <button className="calc-button" onClick={()=>this.findNumber("8")}>8</button>
                    <button className="calc-button" onClick={()=>this.findNumber("9")}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.findOperator("*")}>x</button>
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