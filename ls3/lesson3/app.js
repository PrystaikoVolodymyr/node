const express=require(`express`)
const expressHbs=require(`express-handlebars`)
const path=require(`path`)
const fs=require(`fs`)
const {promisify}=require(`util`)
const apiRouter=require(`./router/api.router`)//прийняли роутер з апі який передавали


//======================================
//Заміна КОЛБЕКІВ на ПРОМІСИ
// const {promisify}=require(`util`)
// const writeFilePromise=promisify(fs.writeFile)
// writeFilePromise(path.join(__dirname,`volodymyr.txt`),`Hi..My name is Volodymyr `).then()
// fs.writeFile(path.join(__dirname,`volodymyr.txt`),`Hi..My name is Volodymyr `,err => {
//     if (err){
//         console.log(err)
//     }
// })
//======================================



const writeFilePromise=promisify(fs.writeFile)
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,`static`)))


app.use(`/`,apiRouter)//щоб наша апа викликала на  всі слеші `/` файл apiRouter







app.listen(5000,()=>{
    console.log(`App listen 5000`)
})