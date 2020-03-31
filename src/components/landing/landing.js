import React, { Component } from 'react';

import LandingTitle from "./landing-title";
import LandingAttributes from "./landing-attributes";


class Landing extends Component {
  constructor() {
  super();
}
  render() {
    return(
        <div className="landing">
            <div className="content-wrapper">
                <LandingTitle />
                <LandingAttributes />
            </div>
        </div>
    )
}
}

export default Landing;