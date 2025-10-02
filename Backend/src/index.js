import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/auth.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import getUserRoutes from "./routes/getUser.route.js"
import getMessageRoutes from "./routes/getMessage.route.js"
import { app, server } from "./lib/socket.js";

dotenv.config()
const PORT = process.env.PORT
app.use(cookieParser());// Middleware to parse cookies
app.use(express.json()); //To parse into javascript object the data that comes from client
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL_PROD
        : process.env.FRONTEND_URL_DEV,
    credentials: true
}))
app.use("/api/auth", authRoutes);
app.use("/api/getUsers", getUserRoutes)
app.use("/api/message", getMessageRoutes)


server.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
    connectDB();
})
