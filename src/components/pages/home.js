import React from "react";
import {Helmet} from "react-helmet";

import PortfolioContainer from "../portfolio/portfolio-container";
import Landing from "../landing/landing";
export default function() {
    return (
        <div>
          <Helmet>
            <title>Chandler King Portfolio</title>
            <meta name="description" content="Full stack web developer. Mobile responsive design, ES6, React, Javascript, and API development." />
          </Helmet>
          <Landing />
          <PortfolioContainer />
        </div>
    );
};

