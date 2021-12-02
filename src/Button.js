import React, {Component} from 'react'

export default class Button extends Component {
    render() {
        return(
        <button
        onClick={(e) => this.props.onClick(e)} 
        className={this.props.className} 
        name={this.props.name} 
        value={this.props.value}>{this.props.name}</button>
        )
    }
}