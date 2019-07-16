import React, { Component } from 'react';
import SearchBar from './SearchBar';


export default class App extends Component {
    render() {
        return (
            <div className="ui container" style={{marginTop: '2rem'}}>
                <SearchBar/>
            </div>
        )
    }
}
