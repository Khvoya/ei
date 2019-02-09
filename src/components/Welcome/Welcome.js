import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <div className="Welcome__welcome-text">
                    <h2>
                        welcome to the
                    </h2>
                    <h1>
                        Electric Indians
                    </h1>
                </div>
            </div>
        );
    }
}

export default Welcome;