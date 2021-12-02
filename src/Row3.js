import React, { Component } from 'react' 

class Row3 extends Component {
    render () {
        return (
            <>
            <button className="calc-button" onClick={this.props.pd}>4</button>
            <button className="calc-button" onClick={this.props.pd}>5</button>
            <button className="calc-button" onClick={this.props.pd}>6</button>
            <button className="calc-button calc-button-op" onClick={this.props.op}>-</button>
            </>
        )
    }
}

export default Row3
