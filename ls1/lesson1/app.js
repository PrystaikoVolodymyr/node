// const {fullName,age,name}=require(`./dir/file`)//require-імпорт модулів з файлу
//
// fullName(name,age)
//
// console.log(`=======`)
// console.log(__dirname)//шлях до дерикторії
// console.log(__filename)//шлях до файлу
// console.log(process)
// console.log(`=======`)

const fs=require(`fs`)//підключення файлової системи для роботи з файлами і папками
const path=require(`path`)//підключення бібліотеки

const filePath=__dirname+`/dir/filepath.txt`

// fs.writeFile(filePath,`HEElll`,err => {//створюємо файл по шляху filePath (data - вміст файлу)(кожного разу кли викликаємо,файл переписується)
//     if (err){
//         console.log(err)
//     }
// })

// fs.appendFile(filePath,` VOVA `,err => {//дописуємо щось в файл filePath(data-що дописуємо)
//     if (err){
//         console.log(err)
//     }
// })

// fs.readFile(filePath,(err, data) => {//зчитує що є а файлі
//     console.log(data)
//     console.log(data.toString())
// })

// fs.mkdir(__dirname+`/dir/films/trailer`,{recursive:true},err => {//створення нової деректорії(recursive:true- рекурсивно створює,якщо немає попередгьої стврює її(йде з кінця))
//     if (err){
//         console.log(err)
//     }
// })

// fs.rmdir(__dirname+`/dir/films`,{recursive:true},err => {//видалення деректорї
//     if (err){
//         console.log(err)
//     }
// })

const dirName=__dirname+`/dir`//шлях до бажаної директорії

// fs.readdir(dirName,(err, files) => {//зчитує директорію, показує які файли чи папки в ній є,без вложеності(лише перший рівень) і вертається масив
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log(files)
//     files.forEach(fileName=>{
//         fs.stat(dirName+`/${fileName}`,(err1, stats) =>{//перевіряємо статистику про кожен файл/директорію
//             if (err1){
//                 console.log(err1)
//                 return
//             }
//             console.log(fileName)
//             console.log(stats.isDirectory())//перевіряємо чи файл чи директорія
//         })
//     })
// })

// fs.unlink(dirName+`/filepath.txt`,err => {//видалення ФАЙЛУ(не директрії)
//     if (err){
//         console.log(err)
//     }
// })

// fs.rename(dirName+'1',dirName,err => {//перейменовування файлу або дерикторії
//     if (err){
//         console.log(err)
//     }
// })

// fs.rename(__dirname+`/dir/jsFile.js`,__dirname+`/dir/films/jFile.js`,err => {//переміщення файлу
//     if (err){
//         console.log(err)
//     }
// })

