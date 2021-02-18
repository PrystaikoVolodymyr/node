const fs=require(`fs`)
const path=require(`path`)

const g1800=__dirname+`/people/1800`
const b2000=__dirname+`/people/2000`

// fs.mkdir(g1800,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.mkdir(b2000,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })
//
// fs.writeFile(g1800+`/vova.json`,`{"gender":"male"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(g1800+`/sveta.json`,`{"gender":"female"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(g1800+`/karina.json`,`{"gender":"female"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(g1800+`/stepan.json`,`{"gender":"male"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(b2000+`/ivan.json`,`{"gender":"male"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(b2000+`/viktor.json`,`{"gender":"male"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(b2000+`/vika.json`,`{"gender":"female"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.writeFile(b2000+`/mike.json`,`{"gender":"male"}`,err => {
//     if (err){
//         console.log(err)
//     }
// })

function personeGender(directory){
    fs.readdir(directory,(err, files) => {
    if (err){
        console.log(err)
    }
    files.forEach(fileName=>{
        fs.readFile(directory+`/${fileName}`,(err1, data) => {
            if (err1){
                console.log(err1)
                return
            }
            let person=JSON.parse(data)
            if (person.gender==="female"){
                fs.rename(directory+`/${fileName}`,g1800+`/${fileName}`,err2 => {
                    if (err2){
                        console.log(err2)
                    }
                })
            }else if (person.gender==="male") {
                fs.rename(directory+`/${fileName}`,b2000+`/${fileName}`,err2 => {
                    if (err2){
                        console.log(err2)
                    }
                })
            }
        })

    })
})
}

personeGender(g1800)
personeGender(b2000)





