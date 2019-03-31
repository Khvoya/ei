import React from 'react';
import './Loader.css'
import logo from 'media/BY_OUTgnFUs.jpg';

const Loader = () => {
  return (
    <div className="Loader__wrap">
      <img className="Loader__logo" src={logo} alt="logo"/>
    </div>
  )
};

export default Loader;
