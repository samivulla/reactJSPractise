import React, { Component } from 'react'

class ClassClick extends Component {

    eventHandler() {
        console.log('class button clicked');
    }
    render() {
        return (
            <div>
                <button onClick={this.eventHandler}>ClassClick</button>
            </div>
        )
    }
}
export default ClassClick
