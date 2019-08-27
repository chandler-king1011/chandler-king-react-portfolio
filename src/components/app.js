import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationConatiner from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import AddBlog from "./pages/addBlog";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationConatiner />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact-me" component={Contact} />
              <Route path="/add-blog" component={AddBlog} />
            </Switch>
          </div>
        </Router>
        <h1>Chandler King Portfolio</h1>
        <h2> {moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
        <PortfolioContainer />
      </div>
    );
  }
}
