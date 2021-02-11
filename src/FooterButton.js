import React, { Component } from 'react'

export default class FooterButton extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button onClick={this.props.reload}>Restart</button>
        )
    }
}