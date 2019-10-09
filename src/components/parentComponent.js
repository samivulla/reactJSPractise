import React, { Component } from 'react'
import ChildComponent from './childComponent';

export class ParentComponent extends Component {
    constructor() {
        super()
        this.state = {
            message: 'sami'
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    eventHandler(child) {
        // this.setState ({
        //     message: 'samivulla'
        // })
        alert(`Hallo ${this.state.message} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent eventHandler={this.eventHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
