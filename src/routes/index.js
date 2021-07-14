const route1 = require('./MauVat');
const route2 = require('./user');

function route(app) {
    app.get('/mauvat/add', (req, res) => {
        res.render('add')
    })
    app.use('/mauvat', route1)

    app.post('/search', (req, res) => {
        console.log(req.body)
        res.render('search')
    })
    app.get('/', (req, res) => {
        return res.render('home')

    });
    app.use('/user', route2)
}
module.exports = route;