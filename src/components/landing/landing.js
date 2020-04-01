import React, { Component } from 'react';
import Axios from "axios";

import LandingTitle from "./landing-title";
import LandingAttributes from "./landing-attributes";
import LandingQuotes from "./landing-quotes";


class Landing extends Component {
  constructor() {
  super();

  this.state = {
    quotes: [],
    quoteCounter: 0
  }
}


  getQuotes() {
    Axios.get("https://api-king-contact.herokuapp.com/quotes")
    .then(response => {
      if (response.status == 200) {
        console.log(response.data[0]);
        this.setState({
          quotes: response.data,
          currentQuote: response.data[0]
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }

  nextQuote() {
    if (this.state.quoteCounter < this.state.quotes.length) {
      this.state.quoteCounter++
    } else {
      this.state.quoteCounter=0;
    }
  }

  componentDidMount() {
    this.getQuotes();
  }


  render() {
    
    return(
        <div className="landing">
            <div className="content-wrapper">
                <LandingTitle />
                <LandingAttributes />
                {this.state.quotes.length > 1 ?
                <LandingQuotes 
                  quote={this.state.quotes[this.state.quoteCounter]}
                  onClick={this.nextQuote}
                /> : 
                null}
            </div>
        </div>
    )
}
}

export default Landing;