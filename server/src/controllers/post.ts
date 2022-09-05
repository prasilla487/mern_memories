import { PostMessageDTO } from '../interfaces';
import express from 'express';
import { PostMessage } from '../models';
import logger from '../middlewares/loggerMiddleware';

export default class PostController{
    constructor(){

    }

    public createPost = async (req : express.Request, res : express.Response) =>{
        try{
            logger.info(`Request received to create post`);
            const post : PostMessageDTO = req.body;
            const postToCreate = new PostMessage(post);
            const createdPost = await postToCreate.save();
            return res.send(createdPost)
        }catch(error){
            res.status(404).json({ message : error.message })
        }

    }

    public getAllPosts =async (req:express.Request, res : express.Response) => {
        try{
            logger.info(`Request received to get all posts`);
            const posts = await PostMessage.find()
            res.send(posts);
        }catch(error){
            res.status(409).json({ message : error.message})
        }

    }
}