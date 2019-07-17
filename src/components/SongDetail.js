import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        return (
            <div>
                Song detail
                {/* {this.props.songs.filter(item => item.title === this.state.selectedSong)} */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps)(SongDetail)
