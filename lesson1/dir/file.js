const vova=`Vova`
const age=`19`

function consoller(string) {
    console.log(string)
}

function fullName(name,age) {
    consoller(`Hello.. my name is ${name}...I have ${age}`)
}

module.exports={
    vova,
    age,
    fullName
}