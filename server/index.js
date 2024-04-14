import express, { application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import clientregister from "./routes/auths.js";
import loginuser from "./routes/auths.js";
import cookieParser from "cookie-parser"
import lawyerRegister from "./routes/auths.js";
import lawyerlogin from "./routes/auths.js";
import posts from  './routes/post.js'
import getPost from './routes/post.js'
const  app = express()
app.use(express.json())
app.use(cors())
dotenv.config();


//DB connection
const connect = () => {
    mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to mongo")
    }).catch(err=>{console.log(`ServerSelectionError:${err.message} Retrying connection`);
    setTimeout(connect, 5000);});
    };
    

//endpoints
app.use(cookieParser())
app.use(express.json())
app.use("/" ,loginuser)
app.use("/",clientregister)
app.use("/",lawyerRegister)
app.use("/",lawyerlogin)
app.use("/",posts)
app.use("/",getPost)

//error handeling
app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message ||"somwthing went wrong";
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

app .listen(4000,()=>{
    connect();
    console.log("server is connected");
})