import { Component } from "react";

class Form extends Component {
    state = {
        firstName: '',
    }
    changeInput = (event) => {
        this.setState({
            firstName: event.target.value,
        })


    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(
            this.state.firstName
        )
    }

    render() {
        return (
            <div>
                Form
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.changeInput} type="text" value={this.state.firstName}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;