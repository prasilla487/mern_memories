import express from "express";
import PostController from '../controllers/post';

const router = express.Router()
const postController = new PostController();

const path = '/posts'

router.post(path, postController.createPost)
router.get(path, postController.getAllPosts)
router.patch(`${path}/:id`, postController.updatePost)
export default router;