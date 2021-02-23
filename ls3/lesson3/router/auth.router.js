const router=require(`express`).Router()//описали роутер


router.get(`/`,(req, res) => {
    res.json(`Auth Success`)
})




module.exports=router//заекспортували роутер