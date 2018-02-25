const sammyApp = Sammy('#app-Container', function () {
    let $appContainer = $('#app-Container');

<<<<<<< HEAD
    this.get('#/login', context => {
        db.user.login()
=======
    this.get('#/login', function (context) {
        db.login()
            .then(res => {
                events = res.result;
                return handlebarsCompiler.compile('login');
            })
            .then(template => {
                $appContainer.html(template(events));

                // put login
                $('#btn-login').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };

                    data.users.login(user)
                        .then((user) => {
                            context.redirect('#/home');
                        })
                });

                // post register
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };

                });
            });
    });


    this.get('#/login', () => {
        db.getAll()
>>>>>>> remotes/origin/master
            .then(res => {
                events = res.result;
                return handlebarsCompiler.compile('login');
            })
            .then(template => {
                $appContainer.html(template(events));

                // put login
                $('#btn-login').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };

                    data.users.login(user)
                        .then((user) => {
                            context.redirect('#/home');
                        })
                });

                // post register
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };

                });
            });
    });

    this.get('#/home', () => {
        let events = null;
        db.photos.getAllPhotos()
            .then(res => {
                events = res.result;
                return handlebarsCompiler.compile('home');
            })
            .then(template => {
                $appContainer.html(template(events));
            });
    });

    this.get('#/events/:id', function () {
        let event = null;
        db.photos.getPhotoById(this.params.id)
            .then(res => {
                event = res.result;
                return handlebarsCompiler.compile('event-details');
            })
            .then(template => {
                $appContainer.html(template(event));
            })
    });

});

$(() => {
    sammyApp.run('#/home');
});