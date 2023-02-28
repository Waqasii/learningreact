import { Component } from "react";


class ClassEvent extends Component {

    handleClick() {
        console.log('Class Bitton Clicked');
    }
    render() {
        return <div>
            <button onClick={this.handleClick}>Click</button>
        </div>
    }

}
export default ClassEvent;