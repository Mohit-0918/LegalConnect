import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import User from "../modles/ClientUsers.js"
import jwt from "jsonwebtoken";
//register
export const register =async (req,res,next)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.password,salt);
        const newUser=new User({...req.body, password:hash});
        await newUser.save();
        res.status(200).json({ message: "User registered successfully" });
    }catch(err){
        if (err.code === 11000 && err.keyPattern.email) {
            // Error code 11000 is for duplicate key violation
            // Check if the duplicate key error is for the email field
            return res.status(400).json({ message: "User with this email already exists. Please choose a different email." });
        }
        next(err);
    }
    
}


export const loginuser =async (req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user =await  User.findOne({ email })
        if(!user) return next(createError(404,"User not found!"))

        const isCorrect = await bcrypt.compare(password,user.password )
        //if(!isCorrect) return next(createError(400,"Wrong Password"))
        if( !isCorrect ) {
            return res.status (403)
            .json({message:"Wrong password."})
        }

        const token =jwt.sign({id:user._id},process.env.JWT)
        const {Password, ...others}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others);
    }catch(err){
        next(err)
    }
    
}