const fs=require(`fs`)
const {promisify}=require(`util`)

const DB=require(`../dataBase/user`)
const base=(`./dataBase/user.json`)

const writeFilePromise=promisify(fs.writeFile)


module.exports={
    // getUsers:()=>{
    //    return DB
    // },
    findUserById:(userId)=>{
        return DB[userId]
    },
    deleteUser:(userId)=>{
        const user=DB.splice(userId,1)
        return user
    },
    getUsers:(language)=>{
        if (language){
            const filterUser=DB.filter(user=>user.language===language)
            return filterUser
        }
        return DB

    },
    createUser:(userObject)=>{
        DB.push(userObject)
        writeFilePromise(base,`${JSON.stringify(DB)}`).then()
    }
}