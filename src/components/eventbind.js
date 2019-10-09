import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : 'sami'
        }
    }

    clickHandler() {
        this.setState({
            message: 'good boy'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler.bind(this)}>Binding</button>
            </div>
        )
    }
}

export default Eventbind
