const sammyApp = Sammy('#app-Container', function () {
    let $appContainer = $('#app-Container');

    this.get('#/home', function () {
        let events = null;
        db.getAll()
            .then(function (res) {
                events = res.result;
                return handlebarsCompiler.compile('home');
            })
            .then(function (template) {
                $appContainer.html(template(events));
            });
    });

    this.get('#/events/:id', function () {
        let event = null;
        db.getById(this.params.id)
            .then(function (res) {
                event = res.result;
                return handlebarsCompiler.compile('event-details');
            })
            .then(function (template) {
                $appContainer.html(template(event));
            })
    });

});

$(function () {
    sammyApp.run('#/home');
});