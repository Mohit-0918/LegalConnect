import mongoose from "mongoose";

const ClientUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:false,
    },
    email:{
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

export default mongoose.model("User", ClientUserSchema); 