import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { thisTypeAnnotation } from '@babel/types';


class PostList extends Component {
    
    componentDidMount () {
        console.log(this.props.fetchPosts())    
    }
    
    render() {
        return (
            <div>
                <h1>post list</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostList)