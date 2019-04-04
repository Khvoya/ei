import React from "react";
import "./PhotoItem.css";
import PropTypes from "prop-types";

const PhotoItem = props => {
  return <img alt="photoItem" className="PhotoItem" src={props.photo} />;
};

PhotoItem.propTypes = {
  photo: PropTypes.string.isRequired
};

export default PhotoItem;
