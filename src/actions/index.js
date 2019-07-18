import jsonPlaceholder from '../api';
import axios from 'axios';


export const fetchPosts = () => async dispatch => {
    const response =  await jsonPlaceholder.get('/posts')
    dispatch({
        type: 'FETCHPOSTS',
        payload: response
    })
};