import React, { Component } from 'react'

export default class extends Component {

    constructor (props) {
        super(props);
        this.state = {
            coordinates: {}
        }

        window.navigator.geolocation.getCurrentPosition(
            (results) => {
                this.setState({coordinates: results.coords})
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        // Dont put any heavy functions in here
        // render() gets called frequently...   
        console.log('render this')
        return (
            <div>
                <h3>Location</h3>
                <p>{this.state.coordinates.longitude}</p>
            </div>
        )
    }
}
