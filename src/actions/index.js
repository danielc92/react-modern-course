import jsonPlaceholder from '../api';
import axios from 'axios';


export const fetchPosts = async () => {

    const response = await axios.get(jsonPlaceholder.get('/posts'))

    return {
        type: 'FETCHPOSTS',
        payload: response
    }
}