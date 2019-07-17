import React, { Component } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';


export default class App extends Component {
    render() {
        return (
            <section>
                <SongList/>
                <SongDetail/>
            </section>
        )
    }
}
