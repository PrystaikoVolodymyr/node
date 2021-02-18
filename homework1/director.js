const fs=require(`fs`)
const path=require(`path`)

// const dir=__dirname+`/dir`
const allFiles=__dirname+`/allfiles`

function getFile(dir,daughterEll) {
    const filePath=path.join(dir,`${daughterEll}`)
    console.log(`------------`)
    console.log(filePath)
    console.log(`------------`)
    fs.readdir(filePath,(err, files) => {
        if (err){
            console.log(err)
            return
        }
        // console.log(files)
        files.forEach(fileName =>{
            fs.stat(filePath+`/${fileName}`,(err1, stats) => {
                if (err1){
                    console.log(err1)
                    return
                }
                console.log(`================`)
                console.log(fileName)
                console.log(stats.isDirectory())
                if (stats.isDirectory()){
                    getFile(filePath,fileName)
                }else {
                    console.log(`this file mast REMOVE`)//зараз все супер працює, як тільки  розкоменчу fs.rename одразу бє помилку, що роблю не так

                    // fs.rename(path.join(filePath,`${fileName}`),path.join(__dirname,`${allFiles}`,`${fileName}`),err2 => {
                    //     console.log(err2)
                    // })
                }
            })
        })
    })
}

getFile(__dirname,`dir`)