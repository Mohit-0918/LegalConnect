import Post from "../modles/Post.js"

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