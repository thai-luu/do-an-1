function checkLogin(req, res, next) {
    if (req.session.username) {
        next()

    } else
        return res.redirect('/')
}
module.exports = checkLogin;