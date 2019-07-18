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


export default connect(null, { fetchPosts })(PostList)