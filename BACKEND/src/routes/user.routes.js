import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js";
import { changeCurrentPassword } from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// secured routes

const RateLimit = require('express-rate-limit'); const limiter = RateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); router.route("/logout").post(limiter, verifyJWT, logoutUser);

router.route("/refreshtoken").post(refreshAccessToken);

router.route("/changepassword").post(changeCurrentPassword);

export default router;
