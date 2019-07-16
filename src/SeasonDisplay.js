import React, { Component } from 'react'

export default class SeasonDisplay extends Component {

    state = {
        month: new Date().getMonth()
    }

    getSeason = (month, latitude) => {
        if (month > 2 && month < 9) {
            return latitude > 0 ? 'Summer' : 'Winter'
        } else {
            return latitude > 0 ? 'Winter' : 'Summer'
        }
    }

    render() {

        const { month } = this.state;
        const { latitude } = this.props.coordinates;
        const season = this.getSeason(month, latitude);
        const seasonColour = (season === 'Summer') ? 'orange' : 'lightblue';
        return (
            <div style={{height: '100vh' ,textAlign: 'center', padding: '8rem 0rem', backgroundColor: seasonColour}}>
               <h3>The season component.</h3>
               <h1 className="ui header">{ season }</h1>
            </div>
        )
    }
}
