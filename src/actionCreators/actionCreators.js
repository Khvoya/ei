import {
  FIREBASE_GET_IMAGE_REFS,
  FIREBASE_GET_CONCERTS,
  FIREBASE_GET_ABOUT_US,
  FIREBASE_GET_WELCOME_BG
} from "./actionTypes";
import { refs, getConcerts } from "helpers/refs";

export const getImageRef = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_IMAGE_REFS,
  payload: refs(bucket, counter, alone)
});

export const getConcertsData = () => ({
  type: FIREBASE_GET_CONCERTS,
  payload: getConcerts()
});

export const getAboutUs = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_ABOUT_US,
  payload: refs(bucket, counter, alone)
});

export const getWelcomeBg = (bucket, counter, alone = false) => ({
  type: FIREBASE_GET_WELCOME_BG,
  payload: refs(bucket, counter, alone)
});
