import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import pythonLogo from '../../../static/assets/images/about/logos/pythonlogo.png'

export default function() {
    return (
    <div className="about__technology">
        <h2 className="technology__title">My Technology Toolbelt</h2>
        <div className="technology__icons">
            <a href="https://www.javascript.com/"><FontAwesomeIcon icon={["fab", "js"]} className="js" /></a>
            <a href="https://reactjs.org/"><FontAwesomeIcon icon={["fab", "react"]} className="react" /></a>
            <a href="https://nodejs.org/en/"><FontAwesomeIcon icon={["fab", "node"]} className="node"/></a>
            <a href="https://www.npmjs.com/"><FontAwesomeIcon icon={["fab", "npm"]} className="npm"/></a>
            <FontAwesomeIcon icon={["fab", "html5"]} className="html"/>
            <FontAwesomeIcon icon={["fab", "css3-alt"]} className="css" />
            <a href="https://git-scm.com/"><FontAwesomeIcon icon={["fab", "git"]} className="git"/></a>
            <a href="https://www.python.org/"><img className="python" src={pythonLogo} /></a>
            <FontAwesomeIcon icon="database" className="database"/>
        </div>
  </div>
  )
}