const route1 = require('./MauVat');

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
}
module.exports = route;