const router = require('express').Router();
var crypto = require('crypto');
let User = require('../../models/user.model');



router.route('/register').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    var password = req.body.password;
    password = crypto.createHash('sha256').update(password).digest('base64');

    const newUser = new User({
        username,
        email,
        password,
    });   

    newUser.save()
    .then(() => res.json())
    .catch(err => res.status(400).json('Username have been taken. Please login'));
});

router.route('/login').post((req, res) => {
    const username = req.body.username;
    var password = req.body.password;

    password = crypto.createHash('sha256').update(password).digest('base64');
    User.find({'username' : username}).
    then(user => {
        if(password == user[0].password) {
            const { password, ...userWithoutPassword } = user;
        } else{
            res.status(400).json('Wrong password');
        }
    })
    .catch(err => res.status(400).json('User not found'));;
});

module.exports = router;