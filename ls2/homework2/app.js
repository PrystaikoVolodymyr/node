// Вам потрібно реалізувати мінімум 5 строрінок.
// 1) Реєстрація
// 2) Логінація.
// 3) Список всіх юзерів.
// 4) Інформація про одного юзера
// 5) Помилка
//
// Створити файл з юзерами, який буде виступати в ролі бази данних.
//
// eslint-disable-next-line max-len
//     При реєстрації юзер вводть мейл, нік та пороль і ви його данні дописуєте в файл. Але тільки якщо його немає ще. Якшо він є, то видаєте помилку. Після реєстрації переходите на сторінку зі всіма юзерми.
//
// eslint-disable-next-line max-len
//     При логінації юзер так само ввоить мейл та пароль і вам необхідно знайти його мейлик в списку юзерів та якщо такий мейлик з таким паролем є, то віддати інформацію про юзера. В інакшому випадку сказати, що необхідно реєструватись.
//
//     І відображення всіх юзерів це відповідно просто виведення списку вісх юзерів.
//
//     При реєстрації мейли не можуть повторюватись

const fs = require('fs');
const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

// eslint-disable-next-line max-len
fs.writeFile(path.join(__dirname, 'static', 'users.json'), '', (err) => { // створюємо файл по шляху filePath (data - вміст файлу)(кожного разу кли викликаємо,файл переписується)
    if (err) {
        console.log(err);
    }
});

app.listen(5001, () => {
    console.log('let start REGISTER');
});

app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    if (users.find((user) => user.email === req.body.email && user.NikName === req.body.NikName)) {
        console.log('ERRRR');
        res.json('You have already registered ');
    } else if (users.find((user) => user.NikName === req.body.NikName || user.email === req.body.email)) {
        console.log('ERRRR');
        res.json('NikName or email is already used ');
    } else {
        // res.json(`You registered successful`)
        users.push(req.body);
        fs.writeFile(path.join(__dirname, 'static', 'users.json'), `${JSON.stringify(users)}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
        fs.readFile(path.join(__dirname, 'static', 'users.json'), (err, data) => { // зчитує що є в файлі
            res.json(JSON.parse(data.toString()));
        });
    }
});

app.get('/login', (req, res) => {
    res.render('login',);
});
app.post('/login', (req, res) => {
    if (users.find((user) => user.email === req.body.email && user.password === req.body.password)) {
        // eslint-disable-next-line no-shadow
        const user = users.find((user) => user.email === req.body.email);
        res.json(user);
    } else {
        res.json('Go to REGISTER');
    }
});
