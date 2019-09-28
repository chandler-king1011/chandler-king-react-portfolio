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
        if (filter === "Clear_Filters") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }

    }

    getPortfolioItems(filter = null) {
        axios.get('https://chandlerking.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        if (filter) {
            this.setState({
                data: response.data.portfolio_items.filter(item => {
                    return item.category === filter;
                })
            })
        } else {
            this.setState({
                data: response.data.portfolio_items
        });
      }
    }
    )
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
            <div className="homepage-wrapper">
                <div className="filter-buttons">
                    <button className="btn" onClick={() => this.handleFilter("Clear_Filters")}>All</button>
                    <button className="btn" onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter("Technology")}>Technology</button>
                    <button className="btn" onClick={() => this.handleFilter("Social Media")}>Social Media</button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
            
            );
    }
}