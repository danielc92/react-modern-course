import React, { Component } from 'react';
import SearchBar from './SearchBar';


export default class App extends Component {
    
    state = {}

    onSearchSubmit = (text) => {
        console.log(`Logging - ${text}`)
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '2rem'}}>
                <SearchBar onSearch={this.onSearchSubmit}/>
            </div>
        )
    }
}
