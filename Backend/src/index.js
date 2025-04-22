import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import authRoutes from "./routes/auth.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import getUserRoutes from "./routes/getUser.route.js"
import getMessageRoutes from "./routes/getMessage.route.js"
import { app, server } from "./lib/socket.js";
import path from "path"

dotenv.config()
const PORT = process.env.PORT
const __dirname = path.resolve(); //It gives the path of backend folder
app.use(cookieParser());// Middleware to parse cookies
app.use(express.json()); //To parse into javascript object the data that comes from client
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/auth", authRoutes);
app.use("/api/getUsers", getUserRoutes)
app.use("/api/message", getMessageRoutes)

app.use(express.static(path.join(__dirname, "../Frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
    connectDB();
})