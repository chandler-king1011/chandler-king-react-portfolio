import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import AddBlog from "./pages/addBlog";
import ManagePortfolio from "./pages/managePortfolio"
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin=this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin=this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout=this.handleSuccessfulLogout.bind(this);

  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", { withCredentials: true }).then(response => {
        const loggedIn = response.data.logged_in;
        const status = this.state.loggedInStatus;
        if (loggedIn && status === "LOGGED_IN") {
            return loggedIn;
        } else if(loggedIn && status === "NOT_LOGGED_IN") {
            this.handleSuccessfulLogin();
        } else if (!loggedIn && status === "LOGGED_IN") {
            this.handleUnSuccessfulLogin();
        }
    }).catch(error => {
      console.log("Error", error);
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer loggedInStatus={this.state.loggedInStatus} handleSuccessfulLogout={this.handleSuccessfulLogout} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" render={props => (
                <Auth 
                {...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnSuccessfulLogin={this.handleUnSuccessfulLogin} />
                )} />
              <Route path="/about-me" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact-me" component={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN" ? <Route path="/manage-blog" component={AddBlog} /> : null}
              {this.state.loggedInStatus === "LOGGED_IN" ? <Route path="/manage-portfolio" component={ManagePortfolio} /> : null}
              <Route exact path="/portfolio/:id" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
