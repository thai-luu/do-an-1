const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const connection = require('./config/db');
connection.connect();
const { extname } = require('path');
const route = require('./routes');


var app = express();

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.use(morgan('combined'));

// var checkAdmin = (req, res, next) => {
//     if (dangnhap) {
//         next();
//         user.role = 'admin'
//     } else {
//         res.json('ban chua dang nhap');
//     }
// }
// var checkDangNhap = (req, res, next) => {
//     if (dangnhap) {
//         next();
//         user.role = 'admin'
//     } else {
//         res.json('ban chua dang nhap');
//     }
// }
route(app);
app.listen(3000, () => {
    console.log("server litering");
});