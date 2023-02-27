import { Component } from "react";

class Message extends Component {

    render() {
        return <h1> This is Message Component from {this.props.msg}! </h1>
    }

}

export default Message;