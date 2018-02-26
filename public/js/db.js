const db = ((() => {

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

  // #region login/register
  function register(user) {};

  function login(user) {
    const promise = new Promise((resolve, reject) => {
      $.ajax({
        url: '/#/login',
        method: 'GET',
        data: JSON.stringify(user),
        contentType: 'application/json',
        success: user => {
          resolve(user);
        },
        error: () => {
          toastr.error('User not registered!');
          reject('User not registered!')
        }
      })
    });
    return promise;
  };

  function logout(user) {};
  // #endregion

  return {
    user: {
      register,
      login,
      logout

    },
    photos: {
      getAllPhotos,
      getPhotoById
    }
  };
}))();