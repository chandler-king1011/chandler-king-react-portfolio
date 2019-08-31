import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor() {
        super();

    
    }

    render() {
        return (
            <div>
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink  to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/contact-me" activeClassName="nav-link-active">Contact</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        {false ? <NavLink to="/add-blog" activeClassName="nav-link-active">Add Blog</NavLink> : null }  
                    </div> 
                </div>
                <div className="right-side">Chandler King</div>
            </div>
            </div>
        )
    }

}