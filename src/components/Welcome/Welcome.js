import React, { Component } from "react";
import "./Welcome.css";
import Button from "../../components/helpers/Button/Button";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="Welcome__welcome-text">
          <h2>welcome to the</h2>
          <h1>Electric Indians</h1>
          <div className="Welcome__button-wrap">
              <Button name="veiw album"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
