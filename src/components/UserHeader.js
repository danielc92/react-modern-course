import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>User Header { this.props.userId }</h3>
                <h3>{ this.props.user ? this.props.user.name : 'user is undefined'  }</h3>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(u => u.id === ownProps.userId)
    }
}
//
export default connect(mapStateToProps, { fetchUser })(UserHeader);