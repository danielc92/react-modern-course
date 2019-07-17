import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions/';


class SongList extends Component {

    render() {
        
        const { songs } = this.props
        console.log('Rendering song list component')
        return (
            <div className="ui divided list">
                {
                    songs.map(item => {
                        return (
                            <div className="item" key={item.rank}>
                                <div className="content">
                                    {item.title}
                                </div>

                                <div className="right floated content">
                                    <button 
                                    onClick={() => this.props.selectSong(item.title)}
                                    className="ui button primary">
                                        Select
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

// const mapActionsToProps = () => {
//     return {
//         doSelectSong: selectSong
//     }
// }

export default connect(mapStateToProps, { selectSong })(SongList);