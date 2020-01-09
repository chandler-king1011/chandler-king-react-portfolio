import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImg from '../../../static/assets/images/auth/login-img.jpg';

export default function() {
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
          <div className="icon-wrapper">
            <FontAwesomeIcon icon="envelope" />
          </div>
          <div className="contact-email">chandler.king1011@gmail.com</div>
        </div>
        <div className="city-wrapper">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon="map-marked" />
          </div>
          <div className="contact-city">Salem, UT</div>
        </div>

   
        <div className="social-media-wrapper">
            <a href='https://github.com/chandler-king1011' className="icon-wrapper"><FontAwesomeIcon className="github" icon={['fab', 'github']} /> </a>
            <a href='https://www.linkedin.com/in/chandler-king-186491192?trk=people-guest_profile-result-card_result-card_full-click'  className="icon-wrapper"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin']} /></a>
            <a href='https://www.facebook.com/chandler.king.96'  className="icon-wrapper facebook"><FontAwesomeIcon className="facebook" icon={['fab', 'facebook']} /></a>
        </div>
      </div>
    </div>
)
}