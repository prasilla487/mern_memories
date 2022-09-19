import axios from 'axios';

const URL = 'http://localhost:5000/posts';

export const fetchPosts = async () => {
    let posts =  await axios.get(`${URL}`);
    return posts

}

export const updatePost = (id, updatedPost ) => {
    return axios.patch(`${URL}/${id}`, updatedPost)
}

export const createPost = (newPost) => axios.post(`${URL}`, newPost)
export const deletePost = (id) => axios.delete(`${URL}/${id}`);


