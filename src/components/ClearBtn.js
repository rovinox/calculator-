import React, { Component } from 'react'

export default class ClearBtn extends Component {
    render() {
        return (
            <div className="clear-btn">

                {this.props.children}
            </div>
        )
    }
}
