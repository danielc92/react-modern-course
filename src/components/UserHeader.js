import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserHeader extends Component {

    render() {
        const { user } = this.props
        return (
            <div style={{ padding: '1rem', border: '1px solid #f8f8f8'}}>
                { user ? 
                <div>
                    <h3>{ user.name }</h3>
                    <p>{ user.email }</p>
                    <p>{ user.username }</p>
                </div> : 
                <h3>User cannot be located...</h3>  }
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
export default connect(mapStateToProps)(UserHeader);