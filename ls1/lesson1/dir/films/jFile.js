const name = 'Vova';
const age = '19';

function consoller(string) {
    console.log(string);
}

// eslint-disable-next-line no-shadow
function fullName(name, age) {
    consoller(`Hello.. my name is ${name}...I have ${age}`);
}
console.log(2222);
module.exports = {
    name,
    age,
    fullName
};
