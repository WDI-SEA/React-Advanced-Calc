import React, { Component } from 'react' 

class Row5 extends Component {
    render () {
        return (
            <>
                <button className="calc-button width-2" onClick={this.props.pd}>0</button>
                <button className="calc-button">.</button>
                <button className="calc-button calc-button-op" onClick={this.props.calc}>=</button>
            </>
        )
    }
}

export default Row5
