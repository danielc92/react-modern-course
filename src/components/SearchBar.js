import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    state = {
        userInput: null
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text"></input>
                    </div>
                    
                </form>
            </div>
        )
    }
}
