const handlebarsCompiler = ((() => {
  function compile(name) {
    const promise = new Promise((resolve, reject) => {
      const url = `public/templates/${name}.handlebars`;
      $.get(url, templateHtml => {
        const template = Handlebars.compile(templateHtml);
        resolve(template);
      });
    });
    return promise;
  }

  return {
    compile
  };
})());