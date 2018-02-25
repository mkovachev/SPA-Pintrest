const db = ((() => {

  function login(user) {
    const promise = new Promise((resolve, reject) => {
      $.ajax({
        url: 'api/login',
        method: 'PUT',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: user => {
          resolve(user);
        },
        error: () => {
          reject('user not registered')
        }
      })
    });
    return promise;
  };

  function register(user) {

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
    user: {
      login,
      register
    },
    photos: {
      getAllPhotos,
      getPhotoById
    }
  };
}))();