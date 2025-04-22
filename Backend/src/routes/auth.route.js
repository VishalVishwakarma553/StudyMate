import express from "express";
import { signup, checkAuth, login, logout, updateProfile, updateDetails } from "../Controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, upload.single('image'), updateProfile);
router.put("/update-details", protectRoute, updateDetails)

router.get("/check", protectRoute, checkAuth);

export default router;
