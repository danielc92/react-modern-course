import React, { Component } from 'react';
import { selectSong } from '../actions';
import SongList from './SongList';


export default class App extends Component {
    render() {
        return (
            <div>
                <h2>app</h2>
                <SongList/>
            </div>
        )
    }
}
