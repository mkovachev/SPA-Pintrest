const db = ((() => {

  function register(user) {};

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

  function logout(user) {};

  function getAllPhotos() {
    const promise = new Promise((resolve, reject) => {
      resolve({
        result: data.photos
      });
    });
    return promise;
  };

  function getPhotoById(id) {
    id = +id;
    const promise = new Promise((resolve, reject) => {
      for (let i = 0; i < data.photos.length; i += 1) {
        if (data.photos[i].id == id) {
          resolve({
            result: data.photos[i]
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