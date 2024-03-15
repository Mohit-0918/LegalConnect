import express from "express";
import { post } from "../controllers/post.js";

const router=express.Router();

//create a post
router.post("/post",post);

//festch a  post

export default router