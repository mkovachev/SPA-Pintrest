const sammyApp = Sammy('#app-Container', function () { // es6 not working here!
    let $appContainer = $('#app-Container');


    this.get('#/login', () => {
        db.user.login()
            .then(res => {
                login = res.result;
                return handlebarsCompiler.compile('login');
            })
            .then(template => {
                $appContainer.html(template(login));

                // login - submit data
                $('#btn-login').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };
                    db.users.login(user)
                        .then(user => {
                            context.redirect('#/home');
                        })
                });

                // register - submit data
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };
                    db.users.register(user)
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

    this.get('#/photos/:id', function () { // es6 not working here!
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