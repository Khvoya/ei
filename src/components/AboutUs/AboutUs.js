import React, { Component } from "react";
import "./AboutUs.css";

class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <div className="AboutUs__picture">

                </div>
                <div className="AboutUs__text">
                    <h1>Band</h1>
                    <p>
                        "On the other hand, we denounce with righteous indignation and dislike
                        men who are so beguiled and demoralized by the charms of pleasure of
                        the moment, so blinded by desire, that they cannot foresee the pain and
                        trouble that are bound to ensue; and equal blame belongs to those who
                        fail in their duty through weakness of will, which is the same as saying
                        through shrinking from toil and pain. These cases are perfectly simple
                        and easy to distinguish. In a free hour, when our power of choice is
                        untrammelled and when nothing prevents our being able to do what we
                        like best, every pleasure is to be welcomed and every pain avoided.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;