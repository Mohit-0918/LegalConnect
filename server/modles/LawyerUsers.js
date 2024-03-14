import mongoose from "mongoose";

const LawyerUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        require: true,
        unique:true,
    },
    gender:{
        type:String,
    },
    password:{
        type:String,
        require:true,
    },
    type:{
        type:"L",
    },
    phone:{
        type:Number,
        require:true,
    },
    casetype:{
        type:[String],
    },
    areaofpractice:{
        type:String,
    },
    barc:{
        type:String,
    },
    typeoflawyer:{
        type:String,
    }
},{timestamps:true}
);

export default mongoose.model("User", LawyerUserSchema); 