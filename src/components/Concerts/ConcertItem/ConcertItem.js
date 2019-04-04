import React from "react";
import "./ConcertItem.css";
import PropTypes from "prop-types";

const ConcertItem = props => {
  const { link, date, club, country } = props;
  return (
    <a href={link} className="ConcertItem__link ConcertItem" target="blank">
      <div>{date}</div>
      <div className="ConcertItem__country">{country}</div>
      <div>{club}</div>
    </a>
  );
};
ConcertItem.propTypes = {
  club: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
export default ConcertItem;
