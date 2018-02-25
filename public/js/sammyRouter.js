const sammyApp = Sammy('#app-Container', function () {
    let $appContainer = $('#app-Container');

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
                });

                // post register
                $('#btn-register').on('click', () => {
                    const user = {
                        email: $('#email').val(),
                        passHash: $('#password').val()
                    };

                    $.ajax({
                        
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