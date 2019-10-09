import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message:'sami'
        }
    }

    changeMessage() {
        this.setState({
            message:'subhanbasha'
        })
    }
    render() {

        return(
            <div>
            <h1>Hallo {this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;