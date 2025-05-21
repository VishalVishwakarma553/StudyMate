# StudyMate 🎓🤝

**StudyMate** is a full-stack collaborative platform designed to connect college juniors with their seniors. It allows seniors to guide juniors in their academic and career paths through one-on-one chats, mentorship, and resource sharing — all in a distraction-free environment.

## 🌟 Features

- 👨‍🏫 Mentor-Mentee one-on-one chat system  
- 📁 Resource sharing (documents, links, etc.)  
- 🔗 Real-time connection between juniors and seniors  
- 💬 Real-time communication powered by Socket.io  
- 🎨 Beautiful and responsive UI using TailwindCSS and DaisyUI  
- ⚡ State management using Zustand

## 🚀 Tech Stack

**Frontend:**
- React.js
- TailwindCSS
- DaisyUI
- Zustand

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.io

**Other Tools:**
- Cloudinary (for media uploads)
- JWT (Authentication)
  
## 📦 Installation & Setup

> Before starting, make sure you have Node.js, npm, and MongoDB installed on your machine.

1. **Clone the repository**

```bash
git clone https://github.com/VishalVishwakarma553/StudyMate.git
cd StudyMate
## 🛠️ Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the backend directory with the following:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Start the server:**
   ```bash
   npm run start
   ```

## 💻 Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🌐 Live Demo

Experience StudyMate in action! Visit our live demo:

[![StudyMate Demo](https://img.shields.io/badge/StudyMate-Live%20Demo-blue?style=for-the-badge)](https://study-mate-alpha.vercel.app/)

---

💡 **Feel free to fork this repository and customize it for your needs!**
