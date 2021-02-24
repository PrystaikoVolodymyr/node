const errorCodes=require(`../constants/errorCode.enam`)
const errorMessages=require(`../error/error.messeges`)
const DB=require(`../dataBase/user`)


module.exports={
    isIdValid(req,res,next){
        try {
            const userId= +req.params.userId
            if (userId<0){
                throw new Error(`not valid id`)
            }
            next()
        }catch (e) {
                res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    },
    isUserValid(req,res,next){
        try {
            const {name,email,password,language=`en`}=req.body

            if (!name||!password||!email){
                throw new Error(`Some field is empty`)
            }if (email.search(`@`)===-1){
                throw new Error(errorMessages.BAD_EMAIL[language])
            }if (password.length<=8){//не знав як правильно зробити щоб ловило лише стрінгу в лапках, а не цифри(бага яка була на лекції)
                throw new Error(errorMessages.BAD_PASSWORD[language])
            }
            DB.forEach(user=>{
                if (user.email===email){
                    throw new Error(errorMessages.USER_IS_ALREADY_CREATED[language])
                }
            })
            next()
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    }
}