const express = require('express'),
    app = express();

app.use(express.static('public'));

// register user
app.post('/api/users', (req, res) => {
    db.users.create(req.body)
        .then(user => {
            user = {
                username: user.username,
                authKey: user.authKey
            };
            res.status(201)
                .json(user);
        }, err => {
            res.status(400)
                .json(err);
        });
});

// login user
app.put('/api/login', (req, res) => {
    const query = {
        usernameLower: req.body.username.toLowerCase()
    };
    db.users.find(query)
        .then(users => {
            const user = users[0];
            if (!user || user.passHash !== req.body.passHash) {
                res.status(404)
                    .json({
                        err: 'Email or password is invalid'
                    });
                return;
            }
            res.json({
                username: user.username,
                authKey: user.authKey
            });
        });
});

app.get('/', (req, res) => {
    res.send('Express running...')
});

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), () => {
    console.log('Server started on port ' + app.get('port'));
});