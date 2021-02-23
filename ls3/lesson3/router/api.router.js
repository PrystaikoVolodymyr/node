const router=require(`express`).Router()//описали роутер
const userRouter=require(`./user.router`)
const authRouter=require(`./auth.router`)


router.use(`/auth`,authRouter)//
router.use(`/users`,userRouter)//все що починається на '/users' має оброблятися на файлі userRouter









module.exports=router//заекспортували роутер в апп.джс