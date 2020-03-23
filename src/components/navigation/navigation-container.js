import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../../static/assets/images/logo/port_logo.png";




const NavigationContainer = props => {
    
    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials: true }).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error signing out:", error);
        })
    }

    const handleHamburgerClick = () => {
        const hamburger = document.querySelector(".hamburger-menu");
        const navItems = document.querySelector(".left-side");
        const currentPage = document.querySelector(".container")
        hamburger.style.display = "none";
        navItems.style.display = "flex";  
        currentPage.classList.add("stop-scrolling");
    }

    const handleHamburgerExit = () => {
        const hamburger = document.querySelector(".hamburger-menu");
        const navItems = document.querySelector(".left-side");
        const currentPage = document.querySelector(".container");
        hamburger.style.display = "flex";
        navItems.style.display = "none"; 
        currentPage.classList.remove("stop-scrolling");
    }

    const closeMenuOnPageChange = () => {
        const hamburger = document.querySelector(".hamburger-menu");
        const navItems = document.querySelector(".left-side");
        const currentPage = document.querySelector(".container");
        if (window.innerWidth < 768) {
            hamburger.style.display = "flex";
            navItems.style.display = "none"; 
            currentPage.classList.remove("stop-scrolling");
        }
    }

    return (
      <div className="nav-wrapper">
        <a className="hamburger-menu" onClick={handleHamburgerClick}><FontAwesomeIcon icon="bars"/></a>
        <div className="left-side">
            <a className="hamburger-menu__exit" onClick={handleHamburgerExit}><FontAwesomeIcon icon="times"/></a>
            <div className="nav-link-wrapper">
                <NavLink exact to="/" activeClassName="nav-link-active" onClick={closeMenuOnPageChange}>Home</NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/about-me" activeClassName="nav-link-active" onClick={closeMenuOnPageChange}>About</NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active" onClick={closeMenuOnPageChange}>Blog</NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/contact-me" activeClassName="nav-link-active" onClick={closeMenuOnPageChange}>Contact</NavLink>
            </div> 
            <div className="nav-link-wrapper">
                {props.loggedInStatus === "LOGGED_IN" ? <NavLink to="/manage-portfolio" activeClassName="nav-link-active" onClick={closeMenuOnPageChange}>Portfolio Manager</NavLink> : null }  
            </div> 
        </div>
        <div className="right-side">
            <div>Chandler King
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}><FontAwesomeIcon icon="sign-out-alt"/></a> : null}
            </div>
            <img className="nav-wrapper__logo" src={logo} />
        </div>
      </div>
    );
};

export default withRouter(NavigationContainer);