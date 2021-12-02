import React, { Component } from 'react' 

class Row1 extends Component {
    render () {
        return (
            <>
            <button className="calc-button calc-button-top" onClick={this.props.clear}>AC</button>
            <button className="calc-button calc-button-top">+/-</button>
            <button className="calc-button calc-button-top" onClick={this.props.op}>%</button>
            <button className="calc-button calc-button-op" onClick={this.props.op}>/</button>
            
            </>
        )
    }
}

export default Row1
