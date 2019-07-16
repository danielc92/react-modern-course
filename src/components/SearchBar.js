import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    state = {
        userInput: null
    }
    
    handleClientInput = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input onChange={this.handleClientInput} type="text"></input>
                    </div>
                    
                </form>
            </div>
        )
    }
}
