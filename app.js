var express = require('express'),
    app = express();

app.use(express.static('public'));

// register user
app.post('/api/users', function (req, res) {
    db.users.create(req.body)
        .then(function (user) {
            user = {
                username: user.username,
                authKey: user.authKey
            };
            res.status(201)
                .json(user);
        }, function (err) {
            res.status(400)
                .json(err);
        });
});

// login user
app.put('/api/login', function (req, res) {
    const query = {
        usernameLower: req.body.username.toLowerCase()
    };
    db.users.find(query)
        .then(function (users) {
            const user = users[0];
            if (!user || user.passHash !== req.body.passHash) {
                res.status(404)
                    .json({
                        err: 'Username or password is invalid'
                    });
                return;
            }
            res.json({
                username: user.username,
                authKey: user.authKey
            });
        });
});


// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function () {
    console.log('Server started on port ' + app.get('port'));
});