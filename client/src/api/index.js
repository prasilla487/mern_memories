import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = async () => {
    let posts =  await axios.get(`${URL}/posts`);
    return posts

}

export const createPost = (newPost) => axios.post(`${URL}/posts`, newPost)

