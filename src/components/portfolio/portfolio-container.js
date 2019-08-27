import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "This is my Portfolio",
            isLoading: false,
            data: [
                {title: "Arbys", url: "arbys.com", category: "FastFood"},
                {title: "Rocky Mountain ATV/MC", url: "rockymountainatvmc.com", category: "Parts"},
                {title: "Bottega", url: "bottega.tech", category: "Coding"},
                {title: "DevCamp", url: "devcamp.com", category: "Coding"}

            ]
        }

        this.handleFilter = this.handleFilter.bind(this);

        
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })

    }


    portfolioItems() {
        return this.state.data.map(i => {
            return <PortfolioItem title={i.title} url={i.url} />;
        })
    }

 

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItems()}
                <button onClick={() => this.handleFilter("FastFood")}>FastFood</button>
                <button onClick={() => this.handleFilter("Coding")}>Coding</button>
                <button onClick={() => this.handleFilter("Parts")}>Parts</button>
            </div>
            
            );
    }
}