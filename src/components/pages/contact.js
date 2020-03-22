import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImg from '../../../static/assets/images/contact/artificial-intelligence-port.jpg';
import ContactForm from "../contact/contact-form";
import Axios from 'axios';





class Contact extends Component {

  constructor() {
    super();

    this.handleContactFormSubmit=this.handleContactFormSubmit.bind(this);
  }

  handleContactFormSubmit(messageObj) {
    Axios({
      method: "POST",
      url: "https://api-king-contact.herokuapp.com/messages",
      data: messageObj
    }).then(response => {
      console.log(response.status);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="contact-body-wrapper">
        <div className="contact-img-wrapper"
                style={{
                  backgroundImage: `url(${contactImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}/>
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
          <ContactForm contactFormSubmit={this.handleContactFormSubmit} />
          <div className="social-media-wrapper">
              <a href='https://github.com/chandler-king1011' className="icon-wrapper"><FontAwesomeIcon className="github" icon={['fab', 'github']} /> </a>
              <a href='https://www.linkedin.com/in/chandler-king-186491192?trk=people-guest_profile-result-card_result-card_full-click'  className="icon-wrapper"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin']} /></a>
              <a href='https://www.facebook.com/chandler.king.96'  className="icon-wrapper facebook"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook']} /></a>
          </div>
        </div>
      </div>
  )}
}

export default Contact;