const handlebarsCompiler = ((() => {
  function compile(name) {
    const promise = new Promise((resolve, reject) => {
      const url = `public/templates/${name}.handlebars`;
      $.get(url, html => {
        const template = Handlebars.compile(html);
        resolve(template);
      });
    });
    return promise;
  }

  return {
    compile
  };
})());