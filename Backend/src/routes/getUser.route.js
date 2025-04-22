import express from "express";
import { getUsersToShow, userForViewProfile } from "../Controllers/getUser.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()
router.get("/allUsers",protectRoute, getUsersToShow)
router.get("/viewProfileUser/:id", userForViewProfile)

export default router