import express from "express";
import { getPost, post } from "../controllers/post.js";

const router=express.Router();

//create a post
router.post("/post",post);

//festch a  post
router.get("/post/:city",getPost);

export default router