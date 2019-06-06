import { combineReducers } from "redux";
import { welcome } from "./welcome/welcome";
import { photos } from "./photos/photos";
import { concerts } from "./concerts/concerts";
import { aboutUs } from "./aboutUs/aboutUs";
import { shop } from "./shop/shop";
import { sendEmail } from "./sendMail/sendMail";

export default combineReducers({
  welcome,
  photos,
  concerts,
  aboutUs,
  shop,
  sendEmail
});
