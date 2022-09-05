import express from "express";
import PostController from '../controllers/post';

const router = express.Router()
const postController = new PostController();

router.post('/posts', postController.createPost)
router.get('/posts', postController.getAllPosts)
export default router;