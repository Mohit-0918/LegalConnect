import express from "express";
import { lawyerRregister, loginlawyer, loginuser, register } from"../controllers/auth.js";

const router =express.Router();

//Create a User
router.post("/register",register)




//Sign in
router.post("/loginuser",loginuser)




//Google authentication
router.post("/google",)



//lawyer Regisertation
router.post("/lawyerregister",lawyerRregister)

//lawyer Login
router.post('/loginlawyer',loginlawyer);

export default router;