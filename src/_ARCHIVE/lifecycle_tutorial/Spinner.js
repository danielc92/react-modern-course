import React from 'react'

function Spinner(props) {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    )
}

export default Spinner
