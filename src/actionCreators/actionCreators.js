import {
  FIREBASE_GET_IMAGE_REFS,
  FIREBASE_GET_CONCERTS,
  FIREBASE_GET_ABOUT_US,
  FIREBASE_GET_WELCOME_BG,
  FIREBASE_GET_SHOP,
  SEND_ORDER_REQUEST_MAIL,
} from "./actionTypes";
import { refs, getDbCollection } from "middleware/firebase";
import { sendOrderEmail } from "middleware/sendEmail";

export const getImageRef = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_IMAGE_REFS,
  payload: refs(bucket, counter, alone)
});

export const getConcertsData = () => ({
  type: FIREBASE_GET_CONCERTS,
  payload: getDbCollection('concerts')
});

export const getAboutUs = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_ABOUT_US,
  payload: refs(bucket, counter, alone)
});

export const getWelcomeBg = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_WELCOME_BG,
  payload: refs(bucket, counter, alone)
});

export const getShopData = () => ({
  type: FIREBASE_GET_SHOP,
  payload: getDbCollection('shopItems')
});

export const sendOrderMail = (email) => ({
  type: SEND_ORDER_REQUEST_MAIL,
  payload: sendOrderEmail(email),
});
