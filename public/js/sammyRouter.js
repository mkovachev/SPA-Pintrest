const sammyApp = Sammy('#app-Container', function () {
    let $appContainer = $('#app-Container');

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
                    $.ajax({
                        url: 'api/auth',
                        method: 'PUT',
                        data: JSON.stringify(user),
                        contentType: 'application/json',
                        success: function(user){
                            console.log(user);
                        }
                    });
                });

                // post register
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };
                    $.ajax({
                        url: 'api/users',
                        method: 'POST',
                        data: JSON.stringify(user),
                        contentType: 'application/json',
                        success: function(user){
                            console.log(user);
                        }
                    });
                });
            });
    });

    this.get('#/home', () => {
        let events = null;
        db.getAll()
            .then(res => {
                events = res.result;
                return handlebarsCompiler.compile('home');
            })
            .then(template => {
                $appContainer.html(template(events));
            });
    });

    this.get('#/events/:id', () => {
        let event = null;
        db.getById(this.params.id)
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