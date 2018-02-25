const db = (function () {

  function getAll() {
    const promise = new Promise(function (resolve, reject) {
      resolve({
        result: data.events
      });
    });
    return promise;
  };

  function getById(id) {
    id = +id;
    const promise = new Promise(function (resolve, reject) {
      for (var i = 0; i < data.events.length; i += 1) {
        if (data.events[i].id == id) {
          resolve({
            result: data.events[i]
          });
          return;
        }
      }
      reject({
        msg: 'Invalid id'
      });
    });

    return promise;
  };

  return {
    getAll: getAll,
    getById: getById
  };
})();