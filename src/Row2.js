import React, { Component } from 'react' 

class Row2 extends Component {
    render () {
        return (
            <>
                <button className="calc-button" onClick={this.props.pd}>7</button>
                <button className="calc-button" onClick={this.props.pd}>8</button>
                <button className="calc-button" onClick={this.props.pd}>9</button>
                <button className="calc-button calc-button-op" onClick={this.props.op}>x</button>
            </>
        )
    }
}

export default Row2
