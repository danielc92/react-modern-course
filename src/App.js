import React, { Component } from 'react'

export default class extends Component {

    state = {
            coordinates: {},
            error: null
    }

    componentDidMount() {
        console.log("component rendered to screen")
        
        window.navigator.geolocation.getCurrentPosition(
            (results) => {
                this.setState({coordinates: results.coords})
            },
            (error) => {
                this.setState({error: error.message});
            }
        )
    }

    componentDidUpdate(){
        console.log('component was just updated, rerendered')
    }

    render() {

        console.log('rendering')
        // Dont put any heavy functions in here
        // render() gets called frequently...   
        
        if (this.state.error) return (
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
