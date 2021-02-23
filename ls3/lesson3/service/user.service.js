const DB=require(`../dataBase/user`)


module.exports={
    findUser:()=>{
        return DB
    },
    findUserById:(userId)=>{
        return DB[userId]
    },
    createUser:(userObject)=>{
        DB.push(userObject)
    }
}