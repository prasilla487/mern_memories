import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => {
    return axios.get(`${URL}\posts`);

}

export const createPost = (newPost) => axios.post(`${URL}/posts`, newPost)

