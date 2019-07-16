import React, { Component } from 'react'

/*
This is an example of a controlled component
The goal is to centralize data in react, instead of accessing the DOM
*/

export default class SearchBar extends Component {
    
    state = {
        clientInput: ''
    }
    
    // Arrow functions will have access to 'this'
    // Thus avoiding state is undefined error
    handleClientInput = (event) => {
        this.setState({clientInput: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.clientInput)
    }
    render() {

        this.props.onSearch('hey there');
        
        return (
            <div className="ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input 
                    value={this.state.clientInput}
                    onChange={this.handleClientInput} type="text"
                    ></input>
                    </div>
                    
                </form>
            </div>
        )
    }
}
