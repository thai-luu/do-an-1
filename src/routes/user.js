const { request } = require('express');
const express = require('express');
const User = require('../app/Models/User')
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', (req, res) => {
    var newUser = User.findOne({ username: req.body.username }, function(err, user) {
        req.session.username = req.body.username
        req.session.password = req.body.password
        console.log(req.session)
        res.render('home')


    })

})
module.exports = router;