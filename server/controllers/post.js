import createError from "../error.js";
import Post from "../modles/Post.js"
//create a post
export const post=async (req,res,next)=>{
    try{
         // Create a new post object using data from the request body
        const newPost = new Post({...req.body});
         // Save the new post to the database
        const savedPost = await newPost.save()
         // Send a success response back to the client
        res.status(201).json({ success: true, message: 'Post created successfully', post: savedPost });
    }catch(err){
        next(err)
    }
}
//Get all the post
export const getPost=async(req,res,next)=>{
    try{
        const city=req.body.city;
        // console.log(req.body.city);
        if(!city)
        return next(createError(400,"City is required"));
        const post=await Post.find({city});
        if(post.length===0) 
        return  next(createError(404,'No posts found in this city'));
        res.status(200).json({ success: true, message: 'Posts fetched successfully', post });
    }catch(err){
        next(err);
    }
}