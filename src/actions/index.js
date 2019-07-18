import jsonPlaceholder from '../api';
import axios from 'axios';


export const fetchPosts = () => async dispatch => {
    const response =  await jsonPlaceholder.get('/posts')
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = (user_id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${user_id}`)
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}