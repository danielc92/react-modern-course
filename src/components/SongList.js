import React, { Component } from 'react'
import { connect } from 'react-redux';


class SongList extends Component {
    render() {
        const { songs } = this.props
        return (
            <div>
                <h3>song list</h3>
                <ul>
                    {
                        songs.map(item => 
                        (<li>{item.title} :: {item.artist} :: {item.rank}</li>))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongList);