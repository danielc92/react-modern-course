import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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
                <SeasonDisplay coordinates={this.state.coordinates}/>
            </div>)

        return <Spinner message={"Enable location services to load data."}/>
    }
}
