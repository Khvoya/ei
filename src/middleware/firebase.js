import {fbConfig} from "constants/fbConfig";

var firebase = require("firebase/app");
require("firebase/storage");
require("firebase/firestore");
firebase.initializeApp(fbConfig);
/**
 * Get array of photo Url's
 *
 * @param {string} bucket - Name of folder in storage.
 * @param {number} [counter=] - Qty of photos.
 * @param {Boolean} [alone=] - return only first url if true.
 * @returns {Array} - Array of URL of photos.
 */
export const refs = async (bucket , counter, alone = false) => {
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
const getUrl = ref => {
  return new Promise((resolve, reject) => {
    return ref.getDownloadURL()
      .then((image) => {
        resolve(image);
      })
      .catch((e) => reject(e));
  })
    .catch((err) => console.log(err));
};

var db = firebase.firestore();
/**
 * Get collection data from db.
 *
 * @param {string} collectionName - Name of required collection.
 * @returns {Promise<Array>}
 */
export const getDbCollection = async collectionName => {
  const result = [];
  await db.collection(collectionName).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      result.push(doc.data());
    });
  });
  return result ;
};
