const db = ((() => {

  function login(email, pass) {

  };

  function register(email, pass) {

  };

  function getAllPhotos() {
    const promise = new Promise((resolve, reject) => {
      resolve({
        result: data.events
      });
    });
    return promise;
  };

  function getPhotoById(id) {
    id = +id;
    const promise = new Promise((resolve, reject) => {
      for (let i = 0; i < data.events.length; i += 1) {
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
    users: {
      login,
      register
    },
    photos: {
      getAllPhotos,
      getPhotoById
    }
  };
}))();