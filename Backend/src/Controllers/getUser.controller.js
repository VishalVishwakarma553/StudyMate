import User from "../Models/user.model.js"

export const getUsersToShow = async (req, res) => {
    try{
        const loggedInUserId = req.user._id
        const otherUsers = await User.find({_id: {$ne : loggedInUserId}}).select("-password")
        res.status(200).json(otherUsers)
    }catch(error){
        console.log("Error in getting all users:", error.message)
        res.status(500).json({ error: "Internal Server Error"})
    }
}
export const userForViewProfile = async (req, res) => {
    try{
        const viewPorfileUserId= req.params.id
        const viewProfileUser = await User.findById(viewPorfileUserId)
        res.status(200).json(viewProfileUser)
    }catch(error){
        console.log("Error in user for view profile", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}