import React from "react";


export default function(props) {
    if (props.leftImageClassName) {
    return(
        <div className="about-grid-row">
            <div className={props.leftImageClassName}></div>
            <div className="about__bio">
                <h2>{props.header}</h2>
                <p>{props.bio}</p>
            </div>
        </div>
    )
  } else if (props.rightImageClassName) {
      return (
        <div className="about-grid-row">
            <div className="about__bio">
                <h2>{props.header}</h2>
                <p>{props.bio}</p>
            </div>
            <div className={props.rightImageClassName}></div>
        </div>
      )
  }
}