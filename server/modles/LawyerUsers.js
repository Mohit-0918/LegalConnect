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
        type:String,
        default: 'L'
    },
    phone:{
        type:Number,
        require:true,
    },
    caseCategory:{
        type:[String],
    },
    practisingarea:{
        type:String,
    },
    barc:{
        type:String,
    },
    userType:{
        type:String,
    }
},{timestamps:true}
);

export default mongoose.model("LawyerUsers", LawyerUserSchema); 