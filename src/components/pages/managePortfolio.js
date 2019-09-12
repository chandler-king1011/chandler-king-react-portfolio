import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioManagerForm from '../portfolio/portfolio-manager-form';


export default class managePortfolio extends Component {
  constructor() {
  super();

  this.state = {
    isLoading: false,
    portfolioItems: [],
    portfolioToEdit: {}
  }
  this.getPortfolioItems = this.getPortfolioItems.bind(this);
  this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
  this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
  this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
  this.handleDeleteClick = this.handleDeleteClick.bind(this);
  this.handleEditClick = this.handleEditClick.bind(this);
  this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this); 
}


clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    });
}


handleEditClick(portfolioItem) {
  this.setState({
    portfolioToEdit: portfolioItem
  });
}

handleDeleteClick(portItem) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portItem.id}`, { withCredentials: true }).then(response => {
      this.setState({
        portfolioItems: this.state.portfolioItems.filter(item => {
          return item.id !== portItem.id;
        })
      })
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}


handleEditFormSubmission() {
    this.getPortfolioItems();
}


handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)});
}

handleFormSubmissionError(error) {
  console.log("Form Submission Error", error)
}

getPortfolioItems() {
  axios.get("https://chandlerking.devcamp.space/portfolio/portfolio_items").then(response =>{
    this.setState({
      portfolioItems: response.data.portfolio_items
    });
  }).catch(error => {
    console.log("error in getPortfolioItems", error);
  });
}

componentDidMount() {
  this.getPortfolioItems();
}
  render() {
    return(
      <div className="portfolio-manager-wrapper">
        <div className="portmanager-left-side">
          <PortfolioManagerForm
           handleNewFormSubmission={this.handleNewFormSubmission} 
           handleEditFormSubmission={this.handleEditFormSubmission}
           handleFormSubmissionError={this.handleFormSubmissionError} 
           clearPortfolioToEdit={this.clearPortfolioToEdit}
           portfolioToEdit={this.state.portfolioToEdit}
           />
        </div>
        <div className="portmanager-right-side">
          <PortfolioSidebarList  
          portItems={this.state.portfolioItems}
          handleDeleteClick={this.handleDeleteClick}
          handleEditClick={this.handleEditClick}/>
        </div>
      </div>
    )
}
}