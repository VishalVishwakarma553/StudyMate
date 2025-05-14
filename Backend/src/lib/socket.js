import {Server} from "socket.io"
import http from "http"
import express from "express"

const app = express()
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin:[""]
    }
})

export const getSocketId = (userId) => {
    return userSocketMap[userId]
}


// Used to store online users
const userSocketMap = {}

io.on("connection", (socket) => {
    // console.log("A user connected", socket.id)

    const userId = socket.handshake.query.userId
    if (userId) userSocketMap[userId] = socket.id

    // io.emit() is used to send event to all connected clients just like broadcasting
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        // console.log("A user disconnected", socket.id)
        // if user disconnect deletes its userId from userSocketMap to show it offline
        delete userSocketMap[userId]
        // tell all the users again that a user becomes offline by send the userSocketMap again which is updated
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export {io, app, server}
