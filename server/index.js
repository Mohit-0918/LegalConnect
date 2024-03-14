import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import clientregister from "./routes/auths.js";
import loginuser from "./routes/auths.js";
import cookieParser from "cookie-parser"

const  app = express()
app.use(express.json())
app.use(cors())
dotenv.config();


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


app .listen(4000,()=>{
    connect();
    console.log("server is connected");
})