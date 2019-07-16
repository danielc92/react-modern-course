import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


const ROOT_URL = 'https://api.unsplash.com/search/photos'


export default class App extends Component {
    
    state = {
        results: []
    }

    onSearchSubmit = async text => {
        
        const client_id = `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
        const response = await axios.get(ROOT_URL, {
            params: { query: text },
            headers: { 'Authorization': client_id }
        })
        
        console.log(response)
    }
    render() {
        console.log('Rendering App component')
        return (
            <div className="ui container" style={{marginTop: '2rem'}}>
                <SearchBar onSearch={this.onSearchSubmit}/>
            </div>
        )
    }
}
