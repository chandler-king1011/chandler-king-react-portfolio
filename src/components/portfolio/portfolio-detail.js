import React, { Component } from 'react';
import axios from 'axios';


export default class PortfolioDetail extends Component {
  constructor(props) {
  super(props);

  this.state = {
    id: this.props.match.params.id,
    name: "",
    description: "",
    category: "",
    url:"",
    logo_url: "",
    thumb_image_url: "",
    banner_image_url: ""
  };

  this.getPortfolioItem=this.getPortfolioItem.bind(this);
};

componentWillMount() {
  this.getPortfolioItem()
};

getPortfolioItem() {
  axios.get(`https://chandlerking.devcamp.space/portfolio/portfolio_items/${this.state.id}`).then(response => {
    const {
      name,
      description,
      category,
      url,
      logo_url,
      thumb_image_url,
      banner_image_url
      } = response.data.portfolio_item;
    this.setState({
      name: name,
      description: description,
      category: category,
      url: url,
      logo_url: logo_url,
      thumb_image_url: thumb_image_url,
      banner_image_url:   banner_image_url
    })
  }
  ).catch(error => {
    console.log("get portfolio detail error:", error);
  })
};


  render() {
    const bannerImageStyle= {
      backgroundImage: `url(${this.state.banner_image_url})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }
    return(
      <div className="portfolio-detail-wrapper" >
        <div className="banner-wrapper" style={bannerImageStyle}>
          <img src={this.state.logo_url}/>
        </div>

        <div className="app-title">
          <h1>{this.state.name}</h1>
        </div>

        <div className="description-wrapper">
          <div className="description">
            {this.state.description}
          </div>
        </div>

        <div className="port-detail-bottom">
          {!this.state.url.startsWith("https://github.com/") ? <a href={this.state.url} target="_blank">Visit {this.state.name}</a> :<a href={this.state.url} target="_blank">See Code</a> }
        </div>
      </div>

    )
}
}