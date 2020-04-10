import React from "react";

export default (props) => {
    const {background, title, className} = props;
    return (
        <div className={`page-banner ${className}`}
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
        >
           <div className="page-banner__title-wrapper">
                <h2 className="page-banner__title">{title}</h2> 
           </div>
        </div>
    )
} 