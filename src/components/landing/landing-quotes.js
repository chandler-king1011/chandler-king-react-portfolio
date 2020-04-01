import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default (props) => {
        return (
            <div className="landing-quotes">
                <a><FontAwesomeIcon icon={"chevron-circle-left"} /></a>
                <div className="landing-quotes__quote-wrapper">
                    <div className="landing-quotes__content">{props.quote.quotes_content}</div>
                    <div className="landing-quotes__author">{props.quote.quotes_author}</div>
                </div>
                <a><FontAwesomeIcon icon={"chevron-circle-right"} /></a>
            </div>
        )
}
