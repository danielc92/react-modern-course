import React, { Component } from 'react'
import { connect } from 'react-redux';


class SongList extends Component {
    render() {
        const { songs } = this.props
        return (
            <div className="ui divided list">
                {
                    songs.map(item => {
                        return (
                            <div className="item" key={item.rank}>
                                <div className="right floated content">
                                    <button className="ui button primary">
                                        Select
                                    </button>
                                </div>

                                <div className="content">
                                    {item.title}
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

export default connect(mapStateToProps)(SongList);