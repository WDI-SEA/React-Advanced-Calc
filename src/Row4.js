import React, { Component } from 'react' 

class Row4 extends Component {
    render () {
        return (
            <>
                <button className="calc-button" onClick={this.props.pd}>1</button>
                <button className="calc-button" onClick={this.props.pd}>2</button>
                <button className="calc-button" onClick={this.props.pd}>3</button>
                <button className="calc-button calc-button-op" onClick={this.props.op}>+</button>
            </>
        )
    }
}

export default Row4
