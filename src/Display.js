import React, { Component } from 'react' 

class Display extends Component {
    render () {
        return (
            <>
            <div className="answer-box">{this.props.number}</div>
            
            </>
        )
    }
}

export default Display
