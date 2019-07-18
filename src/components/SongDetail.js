import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        const { selectedSong } = this.props;
        const boxStyle = {padding: '1rem 4rem', borderRadius: '.5rem', border: '1px solid #f3f3f3'}
        return (
        <React.Fragment>
            { 
                selectedSong ? 
                <article style={boxStyle}>
                    <h1>{ selectedSong.title }</h1>
                    <p>{ selectedSong.artist }</p>
                    <p>{ selectedSong.rank }</p>
                </article> : 
                    <article style={boxStyle}>
                    <h3>You need to select a song to view song details.</h3>
                </article> 
            }  
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)
