// практичне
// - у вас є масив юзрів (до 10), з такими полями наприклад - const users = [
//     { name: 'olya', gender: 'female', age: 20 }
//         ...
// ], вам потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - Olya.txt),
// вміст це сам ваш юзер - { name: 'olya', gender: 'female', age: 20 }
// перед тим створити 4 папки - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
// і розподілити ваших юзерів саме по відповідних папках

const fs=require(`fs`)
const path=require(`path`)

const users = [
    { name: 'olya', gender: 'female', age: 21 },
    { name: 'vova', gender: 'male', age: 19 },
    { name: 'viktor', gender: 'male', age: 35 },
    { name: 'sveta', gender: 'female', age: 16 },
    { name: 'vika', gender: 'female', age: 25 },
    { name: 'ivan', gender: 'male', age: 29 },
    { name: 'petro', gender: 'male', age: 27 },
    { name: 'luba', gender: 'female', age: 17 },
    { name: 'katerina', gender: 'female', age: 11 },
    { name: 'anatoliy', gender: 'male', age: 15 }
    ]

// fs.mkdir(__dirname+`/manOlder20`,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.mkdir(__dirname+`/manYounger20`,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.mkdir(__dirname+`/womanOlder20`,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })
// fs.mkdir(__dirname+`/womanYounger20`,{recursive:true},err => {
//     if (err){
//         console.log(err)
//     }
// })

function addToDir(dirName,fileName,userName) {
    fs.rename(fileName,path.join(__dirname,`${dirName}`,`${userName}`),err => {
        if (err){
            console.log(err)
        }
    })
}

for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let fileName=path.join(__dirname,`${user.name}`)
    let fileContent=JSON.stringify(user)
    fs.writeFile(fileName,fileContent,err => {
        if (err){
            console.log(err)
        }

    })
    if (user.gender===`male`){
        if (user.age<20){
            addToDir(`manYounger20`,fileName,user.name)
        } else {
            addToDir(`manOlder20`,fileName,user.name)
        }

    }  else  if (user.gender===`female`){
        if (user.age<20){
            addToDir(`womanYounger20`,fileName,user.name)

        }else {
            addToDir(`womanOlder20`,fileName,user.name)
        }


    }

}

