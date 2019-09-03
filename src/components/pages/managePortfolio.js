import React, { Component } from 'react';
import axios from 'axios';
export default class  extends Component {
  constructor() {
  super();

  this.state = {
    isLoading: false,
    portfolioItems: []
  }
  this.getPortfolioItems = this.getPortfolioItems.bind(this);
}

getPortfolioItems() {
  axios.get("https://chandlerking.devcamp.space/portfolio/portfolio_items").then(response =>{
    this.setState({
      portfolioItems: response.data.portfolio_items
    });
  }).catch(error => {
    console.log("error in getPortfolioItems", error);
  })
}

componentDidMount() {
  this.getPortfolioItems();
}
  render() {
    return(
      <div className="portfolio-manager-wrapper">
        <div className="portmanager-left-side">
          <h1>Portfolio manager form goes here</h1>
        </div>
        <div className="portmanager-right-side">
          <h1>Portfolio items go here</h1>
        </div>
      </div>
    )
}
}