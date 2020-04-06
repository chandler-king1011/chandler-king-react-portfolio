import React from 'react';


export default function(props) {
    return (
            <div className="footer">
                <a href={props.linkOne}>{props.linkOneName}</a>
                <a href={props.linkTwo}>{props.linkTwoName}</a>
            </div>
    )
}