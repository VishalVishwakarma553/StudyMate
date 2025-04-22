import { useEffect, useState, useRef } from "react"
import { getUsersStore } from "../Store/getUsersStore"
import { useAuthStore } from "../Store/useAuthStore"
import { Send } from "lucide-react"

const Chat = () => {
  const { messages, getMessages, sendMessage, viewProfileUser, UpdateMessage } = getUsersStore()
  const { authUser, onlineUsers} = useAuthStore()
  const [text, setText] = useState("")
  const messagesEndRef = useRef(null)

  useEffect(() => {
    // Only fetch messages once when component mounts
    getMessages()
    UpdateMessage()
    // Don't include messages in dependency array to avoid infinite loop
  }, [UpdateMessage])

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      // Add your send message logic here
      // For example: sendMessage(text);
      sendMessage({text})
      setText("")
    }
  }

  return (
    <div className="bg-[#1a1b41] min-h-screen flex items-center justify-center p-4">
      <div className="bg-slate-700 w-full max-w-6xl rounded-lg shadow-xl overflow-hidden flex flex-col h-[85vh]">
        {/* Chat header */}
        <div className="p-3 border-b border-amber-500 bg-slate-800">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 size-10 rounded-full ring ring-offset-2">
                <img
                  src={viewProfileUser.profilePic || "/avatar.png" }
                  className="object-cover"
                  alt="User avatar"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium text-white">{viewProfileUser.fullName}</h3>
              <p className="text-xs text-green-400">{onlineUsers.includes(viewProfileUser._id)?"Online":"Offline"}</p>
            </div>
          </div>
        </div>

        {/* Message section - takes remaining space */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-700 to-slate-800">
          {messages.map((message) => (
            <div key={message._id} className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}>
              <div className="chat-image avatar">
                <div className="size-10 rounded-full overflow-hidden">
                  <img src="/avatar.png" alt="avatar" className="object-cover" />
                </div>
              </div>
              <div
                className={`chat-bubble rounded-2xl ${
                  message.senderId === authUser._id ? "bg-amber-500 text-white" : "bg-slate-600 text-white"
                }`}
              >
                <p>{message.text}</p>
              </div>
              <div className="chat-footer opacity-70 text-xs mt-1">
                {new Date(message.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input section - fixed at bottom */}
        <div className="p-3 bg-slate-800 border-t border-slate-600">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-amber-500"
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Chat

