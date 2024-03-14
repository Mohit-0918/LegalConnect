import mongoose from "mongoose";

const Post = new mongoose.Schema({
    casetype:{
        type:String,
        required:true,
        unique:false,
    },
   area:{
        type: String,
        require: true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        default:"C",
    }
},{timestamps:true}
); 

export default mongoose.model("Post",Post); 