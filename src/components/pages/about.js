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
            <p className="bio-content">
              Lorem,  ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos 
              Lorem,  ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos 
            </p>
          </div>
        </div>
    )
}