import React, { Component } from 'react';


export default class ImageList extends Component {

    render() {
        
        const imageContainer = {
            borderRadius: '.35rem',
            border: '1px solid #f2f2f2',
            padding: '.8rem'
        }
        const imageStyle = {
            borderRadius: '.6rem'
        }

        return (
            <section id="photos">
                {
                    this.props.images.map(image => {
                        return(
                            <React.Fragment>
                                <article style={imageContainer}>
                                    <img 
                                    key={image.id} 
                                    src={image.urls.regular}
                                    style={imageStyle}
                                    >
                                    </img>
                                </article>
                            </React.Fragment>)})
                }
            </section>
        )
    }
}



// <div className="column">
//     <div className="ui segment">
//         <img 
//         className="ui image" 
//         key={image.id} 
//         src={image.urls.regular}
//         >
//         </img>
//     </div>
// </div></div>