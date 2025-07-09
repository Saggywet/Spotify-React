export const getALlUsers = async (req, res, next) => {
    try{
        const currentUserId = req.auth.currentUserId
        const users = await User.find({clerkId: {$ne:currentUserId}})
        res.status(200).json(users);
    }
    catch(error){
        next(error)
    }
}