// eslint-disable-next-line import/no-unresolved
const express = require('express');// експортуємо бібліотеку фреймворк
const path = require('path');// експортуємо бібліотеку фреймворк
// eslint-disable-next-line import/no-unresolved
const expressHbs = require('express-handlebars');
// експортуємо бібліотеку фреймворк для роботи з html
const app = express();// створюємо саму аплікацію

app.use(express.json());// вчимо ноду працювати з джейсоном
app.use(express.urlencoded({ extended: true }));// бачить більше всього

app.listen(5000, () => { // запускаємо сервер(довільна назва)
    console.log('app listen localhost 500');
});

// eslint-disable-next-line max-len
// app.use(express.static(path.join(__dirname,`static`)))//створюємо статичну папку,яка буде для всіх доступною,вказуємо до неї шлях
//
// app.set(`view engine`,'.hbs')//встаноілюємо конфігурацію,які файли буде переглядати(set-встанови)
// app.engine('.hbs',expressHbs({//задаємо що потрібно робити коли я відмаловую .hbs файл
//     defaultLayout: false
//   }))
// app.set('views',path.join(__dirname,`static`))//вказуємо де воно знаходиться
//
// app.get(`/login`,(req, res) => {
//     res.render('login')
// })
//
// app.post(`/login`,(req, res) => {//при натиску на форму урла не змінн, змінний метод
//     res.json(`VOVOVVOVOVVO`)
// })

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    res.json('Vova');
    console.log(req.body);
});

app.get('/hello', (req, res) => { // get-переходиш за лінкою
    // res.send(`World`)//щось надіслало
    res.write('YES');// щось надсилає,не завершує доки самі не завершимо за доп end
    res.end();// завершує
});

app.get('/users', (req, res) => {
    res.json([
        { name: 'Vova' },
        { name: 'Vika' },
        { name: 'Viktor' }
    ]);
});
