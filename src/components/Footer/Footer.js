import React, { Component } from "react";
import fb from "../../media/socialIcons/fb.png";
// import tw from '../../media/socialIcons/tw.png'
import inst from "../../media/socialIcons/inst.png";
import vk from "../../media/socialIcons/vk.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__coop">
          <span className="Footer__coop-key"> On co-operation write to:</span>
          <span className="Footer__coop-value">info@electric_indians.com</span>
        </div>
        <div className="Footer__social">
          <span className="Footer__social-title">We are in social media:</span>
          <div className="Footer__social-wrap">
            <a
              href="https://www.facebook.com/electricindians/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="fb" className="Footer__social-item" />
            </a>
            {/*<a href="#">*/}
            {/*<img src={tw} alt="tw" className="Footer__social-item" />*/}
            {/*</a>*/}
            <a
              href="https://www.instagram.com/electricindians/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={inst} alt="inst" className="Footer__social-item" />
            </a>
            <a
              href="https://vk.com/electricindians"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={vk} alt="vk" className="Footer__social-item" />
            </a>
          </div>
        </div>
        <div className="Footer__dev-info">
          <span className="Footer__dev-info-r">Electric Indians 2018 ©</span>
          <span className="Footer__dev-info-d">Disigned by Eugene Tumanov</span>
        </div>
      </div>
    );
  }
}

export default Footer;
