const User = require('../app/Models/User')
module.exports.isAuthorized = function(req, res, next) {

    User.findOne(req.session.username).exec(function(error, user) {
        if (error) {
            return next(error);
        } else {
            if (user === null) {
                var err = new Error('Not authorized! Go back!');
                err.status = 400;
                return next(err);
            } else {
                return next();
            }
        }
    });
}