import {fbConfig} from "../constants/fbConfig";

var firebase = require("firebase/app");
require("firebase/storage");

/**
 * Get array of photo Url's
 *
 * @param {string} bucket - Name of folder in storage.
 * @param {number} [counter=] - Qty of photos;.
 * @returns {Array} - Array of URL of photos.
 */
export const getImages = async (bucket ,counter) => {
  const result = [];
  firebase.initializeApp(fbConfig);
  const storageRef = firebase.storage().ref();
  for(let i = 1; i <= counter ; ++i) {
    const imagesRef = storageRef.child(`${bucket}/${i}.jpg`);
    await getUrl(imagesRef, result);
  }
  return result;
};
/**
 * Get URL by ref.
 *
 * @param {Object} ref - Refference of firebase storage.
 * @param {Array} result - Array for combining URL's.
 * @returns {Promise<any | void>}
 */
const getUrl = async (ref, result) => {
  return new Promise((resolve, reject) => {
    ref.getDownloadURL()
      .then((image) => {
        result.push(image);
        resolve(image);
      })
      .catch((e) => reject(e));
  })
    .catch((err) => console.log(err));
};
