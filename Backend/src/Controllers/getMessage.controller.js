import { getSocketId, io } from "../lib/socket.js"
import Message from "../Models/message.model.js"


export const getMessage = async (req, res) => {
    try {
        const otherUserId = req.params.id
        const UserId = req.user._id

        const allMessages = await Message.find({
           $or: [
                { senderId: UserId, receiverId: otherUserId},
                {senderId: otherUserId, receiverId: UserId}
            ],
        })
        res.status(201).json(allMessages)
    } catch (error) {
        console.log("Error in getting message :", error)
        res.status(500).json({error: "Internal Server error"})
    }
}

export const sendMessage = async (req, res) => {
    try{
        const {text} = req.body;
        const receiverId = req.params.id
        const senderId = req.user._id
        const newMessage = new Message({
            senderId,
            receiverId,
            text,
        })
        await newMessage.save()
        const receiverSocketId = getSocketId(receiverId)
        // to send the message only receiver socketId
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }

        res.status(201).json(newMessage)
    }catch(error){
        console.log("Error in send message:", error)
        res.status(500).json({error: "Internal server error"})
    }
}