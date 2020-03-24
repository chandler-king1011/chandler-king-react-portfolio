import React from "react" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 


export default function() {
    return (
        <div className="about-body-wrapper">
          <div className="about-content">
              <div className="about-grid-row">
                <div className="image-wrapper-programming"></div>
                <div className="about__bio">
                  <h2>Professional</h2>
                  <p>
                  My name is Chandler King. I am a certified Full Stack Web Developer. 
                  In early 2020 I completed the Bottega DevCamp Online course. I absolutely love web development. 
                  I am very passionate about making websites that look great, and function any better. 
                  I am currently looking to step full time into the tech world. 
                  I am open to any and all inquires. 
                  I am well versed in modern web development practices such as: Object Oriented Programming, REST API's, and Mobile Responsiveness. 
                  Along my coding journey I have successfully designed, developed, launched, and maintained quite a few applications including this very website. 
                  I am very driven and excited about what the future holds.
                  </p>
                </div>
              </div>

              <div className="about-grid-row">
                <div className="about__bio">
                  <h2>Personal</h2>
                  <p>
                  I am 22 years old and happily married to the love of my life.
                  In my personal time I enjoy several activities away from the computer.
                  I am a sports enthusiast, especially when it comes to the NFL and the Pittsburgh Steelers (Here we go Steelers, here we go!). 
                  In addition to my sports crazed self I also enjoy being outdoors, specifically when I am able to get out on the lake and do some Bass fishing.
                  When I am not doing one of the two activities mentioned above I am probably playing with one of my three dogs Rogue, Rose, and Rae (Yes I said three!).
                  Last thing I should mention about myself is I am a family man first and foremost. Family and friends are everything to me. 
                  </p>
                </div>
                <div className="image-wrapper-hobbies"></div>
              </div>

              <div className="about__technology">
                <h2 className="technology__title">My Technology Toolbelt</h2>
                <div className="technology__icons">
                  <FontAwesomeIcon icon={["fab", "js"]} className="js" />
                  <FontAwesomeIcon icon={["fab", "react"]} className="react" />
                  <FontAwesomeIcon icon={["fab", "node"]} className="node"/>
                  <FontAwesomeIcon icon={["fab", "npm"]} className="npm"/>
                  <FontAwesomeIcon icon={["fab", "html5"]} className="html"/>
                  <FontAwesomeIcon icon={["fab", "css3-alt"]} className="css" />
                  <FontAwesomeIcon icon={["fab", "git"]} className="git"/>
                  <FontAwesomeIcon icon={["fab", "python"]} className="python" />
                  <FontAwesomeIcon icon="database" className="database"/>
                </div>
              </div>
  
              <div className="bottom-links">
                <a href="/contact-me">Contact Me</a>
              </div>
            </div>
        </div>
    )
}