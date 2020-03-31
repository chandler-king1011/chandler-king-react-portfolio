import React from "react";

import logo from "../../../static/assets/images/logo/port_logo.png";

export default () => {
    return (
        <div className="landing-attributes">
            <img src={logo} />
            <ul className="landing-attributes__list">
                <li className="landing-attribute__list-item">ES6, React, and Node</li>
                <li className="landing-attribute__list-item">UI/UX Design</li>
                <li className="landing-attribute__list-item">Mobile Responsive Design</li>
                <li className="landing-attribute__list-item">API Development</li>
                <li className="landing-attribute__list-item">Object Oriented Programming</li>
                <li className="landing-attribute__list-item">SQL Databases</li>
                <li className="landing-attribute__list-item"><a href="/about-me">See More...</a></li>
            </ul>
        </div>
    )
}