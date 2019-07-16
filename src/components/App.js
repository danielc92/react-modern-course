import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



export default class App extends Component {
    
    state = {}

    onSearchSubmit = (text) => {
        console.log(`Logging - ${text}`)
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '2rem'}}>
                <p>afsdfsad - {process.env.REACT_APP_FULLNAME}</p>
                <SearchBar onSearch={this.onSearchSubmit}/>
            </div>
        )
    }
}
