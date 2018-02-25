const sammyApp = Sammy('#app-Container', function () { // es6 not working here!
    let $appContainer = $('#app-Container');


    this.get('#/login', context => {
        db.user.login()
            .then(res => {
                events = res.result;
                return handlebarsCompiler.compile('login');
            })
            .then(template => {
                $appContainer.html(template(events));

                // login
                $('#btn-login').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };
                    data.users.login(user)
                        .then(user => {
                            context.redirect('#/home');
                        })
                });

                // register
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };
                    data.users.register(user)
                        .then(user => {
                            context.redirect('#/home');
                        })
                });
            });
    });


    this.get('#/home', () => {
        let photos = null;
        db.photos.getAllPhotos()
            .then(res => {
                photos = res.result;
                return handlebarsCompiler.compile('home');
            })
            .then(template => {
                $appContainer.html(template(photos));
            });
    });

    this.get('#/events/:id', function () { // es6 not working here!
        let photo = null;
        db.photos.getPhotoById(this.params.id)
            .then(res => {
                photo = res.result;
                return handlebarsCompiler.compile('photo-details');
            })
            .then(template => {
                $appContainer.html(template(photo));
            })
    });

});

$(() => {
    sammyApp.run('#/home');
});