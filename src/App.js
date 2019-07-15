import React, { Component } from 'react'

export default class extends Component {

    constructor (props) {
        super(props);
        this.state = {
            coordinates: {},
            errorMessage: null
        }

        window.navigator.geolocation.getCurrentPosition(
            (results) => {
                this.setState({coordinates: results.coords})
            },
            (error) => {
                this.setState({errorMessage: error.message});
            }
        )
    }

    render() {
        // Dont put any heavy functions in here
        // render() gets called frequently...   
        
        if (this.state.errorMessage) return (
            <div>
                <p>There was an error, perhaps you have disabled location services.</p>
            </div>)
        
        if (this.state.coordinates.latitude) return (
            <div>
                <p>Location has been loaded {this.state.coordinates.latitude}</p>
            </div>)

        return (
            <div className="">
                <p>Loading...</p>
            </div>)
    }
}
