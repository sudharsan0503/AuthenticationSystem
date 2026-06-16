import express from 'express';
import * as authController from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register",authController.register);

router.post("/login",authController.login);

router.get("/get-me",authController.getMe);
router.get("/refresh-token",authController.refreshToken);


//logout
router.get("/logout",authController.logout);
//logout all
router.get("/logout-all",authController.logoutAll);

router.get("/verify-email",authController.verifyEmail);

export default router;