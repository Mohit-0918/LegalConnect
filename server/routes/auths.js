import express from "express";
import { loginuser, register } from"../controllers/auth.js";

const router =express.Router();

//Create a User
router.post("/register",register)




//Sign in
router.post("/loginuser",loginuser)




//Google authentication
router.post("/google",)

export default router;