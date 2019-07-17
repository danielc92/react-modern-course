import React, { Component } from 'react';
import { selectSong } from '../actions';

console.log(selectSong())

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>app</h2>
            </div>
        )
    }
}
