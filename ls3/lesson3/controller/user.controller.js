const userService=require(`../service/user.service`)

module.exports={
    getAllUsers: (req,res)=> {
        const users=userService.findUser()
        res.json(users)
    },
    getSingleUser: (req, res) => {
        const {userId}=req.params
        const user=userService.findUserById(userId)
        res.json(user)
    },
    createUser: (req, res) => {
        userService.createUser(req.body)
        res.status(201).json(`create`)
    }
}