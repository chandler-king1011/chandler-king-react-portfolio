import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImg from '../../../static/assets/images/contact/artificial-intelligence-port.jpg';
import ContactForm from "../contact/contact-form";
import PageBanner from "./page-banner";





class Contact extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="contact-body-wrapper">
        <Helmet>
          <title>Contact Chandler King - Full Stack Web Developer</title>
          <meta name="description" content="Get in touch with full stack web developer Chandler King." />
        </Helmet>  
        <PageBanner background={contactImg} title="Contact Me" className="contact-page-banner"/>

        <div className="contact-info-wrapper">
          <div className="email-wrapper">
            <div className="icon-wrapper__location-email">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="contact-email">chandler.king1011@gmail.com</div>
          </div>
          <div className="city-wrapper">
            <div className="icon-wrapper__location-email">
              <FontAwesomeIcon icon="map-marked" />
            </div>
            <div className="contact-city">Salem, UT</div>
          </div>
          <ContactForm  />
          <div className="social-media-wrapper">
              <a href='https://github.com/chandler-king1011' className="icon-wrapper" title="Github"><FontAwesomeIcon className="github" icon={['fab', 'github']} /> </a>
              <a href='https://www.linkedin.com/in/chandler-king-186491192?trk=people-guest_profile-result-card_result-card_full-click'  className="icon-wrapper" title="Linked In"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin']} /></a>
              <a href='https://www.facebook.com/chandler.king.96'  className="icon-wrapper facebook" title="Facebook"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook']} /></a>
          </div>
        </div>
      </div>
  )}
}

export default Contact;