import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.images.map(image => {
                        return(
                        <div key={image.id}>
                            <img src={image.urls.thumb}></img>
                        </div>
                        )})
                }
            </div>
        )
    }
}
