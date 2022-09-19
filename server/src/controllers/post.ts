import { PostMessageDTO } from '../interfaces';
import express from 'express';
import { PostMessage } from '../models';
import logger from '../middlewares/loggerMiddleware';
import mongoose from 'mongoose';

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

    public updatePost = async ( req : express.Request , res : express.Response) => {
        try{
            const _id  = req.params.id;
            const payload = req.body;
            if(!mongoose.Types.ObjectId.isValid(_id)){
                return res.status(404).send('No post found with the id')
            }else{
                const updatedPost = await PostMessage.findByIdAndUpdate(_id, payload, { new : true})
                res.json(updatedPost);
            }
        }catch(error){
            console.log(error)
        }
    }

    public deletePost = async (req : express.Request , res : express.Response) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`No post found with the id ${id}`)
        }

        await PostMessage.findByIdAndDelete(id);
        res.json({ message : 'Post deleted sucessfully'})
    }

    public likePost =async (req : express.Request , res : express.Response) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`No post found with the id ${id}`)
        }

        const post = await PostMessage.findById(id);
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount : post.likeCount + 1}, { new : true})
        res.json(updatedPost);
    }
}