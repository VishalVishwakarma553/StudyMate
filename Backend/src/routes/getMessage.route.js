import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js"
import { getMessage, sendMessage } from "../Controllers/getMessage.controller.js"

const router = express.Router()
router.get("/getMessage/:id", protectRoute, getMessage)
router.post("/sendMessage/:id", protectRoute, sendMessage)

export default router
