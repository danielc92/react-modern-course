import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(2)
    }

    render() {
        return (
            <div>
                <h3>User Header {this.props.userId}</h3>
            </div>
        )
    }
}


export default connect(null, { fetchUser })(UserHeader);