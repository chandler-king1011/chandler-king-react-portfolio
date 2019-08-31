import React, { Component } from 'react';
import axios from 'axios';


import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "This is my Portfolio",
            isLoading: false,
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
        
    }

    



    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })

    }

    getPortfolioItems() {
        axios.get('https://chandlerking.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        this.setState({
            data: response.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      })
      }

    portfolioItems() {
        return this.state.data.map(i => {
            return <PortfolioItem 
            key={i.id} 
            item={i}
            />;
        })
    }
    

    componentDidMount() {
        this.getPortfolioItems();
    }
 

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
                <button className="btn" onClick={() => this.handleFilter("Technology")}>Technology</button>
                <button className="btn" onClick={() => this.handleFilter("Social Media")}>Social Media</button>
                {this.portfolioItems()}
            </div>
            
            );
    }
}