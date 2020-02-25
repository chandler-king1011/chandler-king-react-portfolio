import React, { Component } from 'react';
import { Link } from "react-router-dom";

import featuredImg from '../../../static/assets/images/featured/featured-logo.png';


class FeaturedPortfolioItem extends Component {
  constructor() {
  super();
}
  render() {
    return(
        <a className="featured-app" href="https://bug-eliminator.herokuapp.com/">
                <div className="featured-app__heading-wrapper">
                    <h1 className="featured-app__heading">Featured Application:</h1>
                </div>
                <div className="featured-app__title-wrapper">
                    <h1 className="featured-app__title">Bug Eliminator</h1>
                </div>        
        </a>
    )
}
}

export default FeaturedPortfolioItem;