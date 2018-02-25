const handlebarsCompiler = (function () {
  function compile(name) {
    const promise = new Promise(function (resolve, reject) {
      const url = `public/templates/${name}.handlebars`;
      $.get(url, function (templateHtml) {
        const template = Handlebars.compile(templateHtml);
        resolve(template);
      });
    });
    return promise;
  }

  return {
    compile
  };
}());