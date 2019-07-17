import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetail extends Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
               <p>{this.props.selectedSong}</p>
               {this.props.songs.map(item => {
                   if (item.title === this.props.selectedSong) {
                       return (
                       <article style={{ padding: '1rem', border: '1px solid #f2f2f2'}}>
                            <h1>{item.title}</h1>
                            <h3>{item.artist}</h3>
                            <p>{item.duration}</p>
                        </article>)
                   }
               })}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SongDetail)
