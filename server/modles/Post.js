import mongoose from "mongoose";

const Post = new mongoose.Schema({
    areaoflaw:{
        type:String,
        required:true,
        unique:false,
    },
   title:{
        type: String,
        require: true,
        unique:false,
    },
    question:{
        type:String,
        required:true,
        unique:false,
    },
    city:{
        type:String,
        required:true,
        unique:false,
    },
    state:{
        type:String,
        required:true,
        unique:false,
    },
    pincode:{
        type:Number,
        minlength:6, 
        required:true,
        unique:false,
    },
    phonenumber:{
        type: Number,
        match:/^[0-9]{10}$/, 
        required: true,
        unique:false,
    }
},{timestamps:true}
); 

export default mongoose.model("Post",Post); 