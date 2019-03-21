import {fbConfig} from "../constants/fbConfig";

var firebase = require("firebase/app");
require("firebase/storage");
firebase.initializeApp(fbConfig);
/**
 * Get array of photo Url's
 *
 * @param {string} bucket - Name of folder in storage.
 * @param {number} [counter=] - Qty of photos.
 * @param {Boolean} [alone=] - return only first url if true.
 * @returns {Array} - Array of URL of photos.
 */
export const getImages = async (bucket ,counter, alone = false) => {
  const result = [];
  const storageRef = firebase.storage().ref();
  for(let i = 1; i <= counter ; ++i) {
    const imagesRef = storageRef.child(`${bucket}/${i}.jpg`);
    const url = await getUrl(imagesRef);
    result.push(url);
  }
  return alone ? result[0] : result ;
};
/**
 * Get URL by ref.
 *
 * @param {Object} ref - Refference of firebase storage.
 * @returns {Promise<any | void>}
 */
const getUrl = async ref => {
  return new Promise((resolve, reject) => {
    ref.getDownloadURL()
      .then((image) => {
        resolve(image);
      })
      .catch((e) => reject(e));
  })
    .catch((err) => console.log(err));
};
