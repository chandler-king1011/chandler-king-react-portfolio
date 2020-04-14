import React from "react";
import {Helmet} from "react-helmet";

import PortfolioContainer from "../portfolio/portfolio-container";
import Landing from "../landing/landing";
export default function() {
    return (
        <div>
          <Helmet>
            <title>Chandler King Portfolio - Full Stack Web Developer</title>
            <meta name="description" content="Portfolio website for Chandler King a full stack web developer. Chandler is experienced in full stack web development using Javascript, ES6, Node, React, MYSQL, HTML, CSS, and SCSS. Chandler also has experience with API development, OOP, and mobile responsive design." />
          </Helmet>
          <Landing />
          <PortfolioContainer />
        </div>
    );
};

