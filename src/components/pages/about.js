import React from "react" 

import AboutBioGrid from '../about/about-bio-grid';
import ServiceDescription from "../about/service-description";
import TechnologyToolbelt from '../about/technology-toolbelt';
import Footer from '../navigation/footer';
import PageBanner from "./page-banner";

import aboutImg from "../../../static/assets/images/about/network-earth.jpg";



export default function() {
    const professionalBio = `My name is Chandler King. I am a certified Full Stack Web Developer. 
    In early 2020 I completed the Bottega DevCamp Online course. I absolutely love web development. 
    I am very passionate about making websites that look great, and function even better. 
    I am currently looking to step full time into the tech world. 
    I am open to any and all inquires. 
    I am well versed in modern web development practices such as: Object Oriented Programming, REST API's, and Mobile Responsiveness. 
    Along my coding journey I have successfully designed, developed, launched, and maintained quite a few applications including this very website. 
    I am very driven and excited about what the future holds.`;
    const personalBio = `I am 22 years old and happily married to the love of my life.
    In my personal time I enjoy several activities away from the computer.
    I am a sports enthusiast, especially when it comes to the NFL and the Pittsburgh Steelers (Here we go Steelers, here we go!). 
    In addition to my sports crazed self I also enjoy being outdoors, specifically when I am able to get out on the lake and do some Bass fishing.
    When I am not doing one of the two activities mentioned above I am probably playing with one of my three dogs Rogue, Rose, and Rae (Yes I said three!).
    Last thing I should mention about myself is I am a family man first and foremost. Family and friends are everything to me.`;

    return (
        <div className="about-body-wrapper">
          <PageBanner background={aboutImg} title="About Me" className="about-page-banner"/>
          <div className="about-content">
              <AboutBioGrid header="Professional" bio={professionalBio} leftImageClassName="image-wrapper-programming" />
              <AboutBioGrid header="Personal Life" bio={personalBio} rightImageClassName="image-wrapper-hobbies" />
              <ServiceDescription />
              <TechnologyToolbelt />
              <Footer linkOne="/contact-me" linkOneName="Contact Me" linkTwo="/blog" linkTwoName="Check Out My Blog" />
          </div>
        </div>
    )
}