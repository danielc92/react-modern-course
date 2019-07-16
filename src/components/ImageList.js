import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="ui three column grid">
                {
                    this.props.images.map(image => {
                        return(
                            <div className="column">
                                <div className="ui segment">
                                    <img 
                                    className="ui image" 
                                    key={image.id} 
                                    src={image.urls.regular}
                                    >
                                    </img>
                                </div>
                            </div>
                    )})
                }
            </section>
            </React.Fragment>
        )
    }
}
