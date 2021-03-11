import React, { Component } from 'react'

class Number extends Component {
    render() {
        return (
            <button 
            className="calc-button"
            onClick={this.props.handleNumberClick} >
                {this.props.number}
            </button>
        )
    }
}

export default Number