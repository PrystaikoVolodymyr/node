const userService=require(`../service/user.service`)
const errorCodes=require(`../constants/errorCode.enam`)

module.exports={
    getAllUsers:(req,res)=>{
        try {
            const {language}=req.query//можливо до кінця дня зроблю зі всіма
            const users=userService.getUsers(language)

            res.json(users)
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }

    },
    getSuchUser:(req,res)=>{
        try {
            const {userId}=req.params
            const user=userService.findUserById(userId)

            res.json(user)
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    },
    deleteUser:(req,res)=>{
        try {
            const {userId}=req.params
            const user=userService.deleteUser(userId)

            res.json(`${JSON.stringify(user)} is deleted`)
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    },
    createUser:(req,res)=>{
        try {
            userService.createUser(req.body)

            res.status(200).json(`Created`)
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    }
}