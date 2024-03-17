import express from "express";
import { lawyerRregister, loginuser, register } from"../controllers/auth.js";

const router =express.Router();

//Create a User
router.post("/register",register)




//Sign in
router.post("/loginuser",loginuser)




//Google authentication
router.post("/google",)



//
router.post("/lawyerregister",lawyerRregister)


export default router;