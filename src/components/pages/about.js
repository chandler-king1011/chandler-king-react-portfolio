import React from "react" 

import aboutImg from "../../../static/assets/images/about/bio-image.jpg";

export default function() {
    return (
        <div className="about-body-wrapper two-column">
          <div className="about-img-wrapper"
              style={{
                backgroundImage: `url(${aboutImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
             />
        
          <div className="bio-wrapper">
            <div className="heading-wrapper">
              <h2>Chandler King</h2>
              <h3>Web Developer</h3>
            </div>
            <div className="bio-content">
              <p>
              I am a currently a student at the Bottega DevCamp coding bootcamp. I am striving and working everyday to become a full time software developer. One of my biggest passions in the field is web development. 
              </p>
              <p>
              I have been trained or learned several different languages and frameworks including: 
              </p>
              <ul className="knowledge-base-list">
                <li>Javascript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Python</li>
                <li>Django</li>
                <li>My SQL</li>
                <li>MongoDb</li>
                <li>UML</li>
              </ul>
              <p>I feel I am best suited as a front end web developer, however I am very comfortable with a lot of backend implementations as well. I am very fond of the React.js library and work with it almost daily. I have a lot of experience working with API's in React and Javascript. Nothing makes me happier than a great looking website that performs even better.</p>
              <p>If you are looking for someone to build your next website for your new business, or even a blog website you are in the right spot. Hop on over to my contact page and lets talk about your idea's! I am always looking to learn new skills and push my creativity so any challenge is welcome. </p>
              <div className="bottom-links">
                <a href="/contact-me">Contact Me</a>
              </div>
            </div>
            
          </div>
        </div>
    )
}