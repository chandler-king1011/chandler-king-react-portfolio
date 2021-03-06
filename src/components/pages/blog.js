import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

import BlogItem from '../blog/blog-item';
import BlogModal from '../modals/add-blog-modal';
import Footer from '../navigation/footer';
import PageBanner from "./page-banner";

import blogImg from '../../../static/assets/images/blog/question-mark.jpg';

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false
    };

    this.getBlogItems= this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
  }


  handleDeleteClick(blog) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`, { withCredentials: true }).then(response => {
      this.setState({
        blogItems: this.state.blogItems.filter(blogItem => {
          return blog.id !== blogItem.id
        })
      });
      return response.data;
    }).catch(error => {
      console.log("error deleting blog post", error);
    })
  }


  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
    });
  }

  handleModalClose() {
    this.setState({
      blogModalIsOpen: false
    });
  }


  onScroll() {
      if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
        return;
      }
      if ( window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight) {
          this.getBlogItems();
      }
    };

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
    axios.get(`https://chandlerking.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, { withCredentials: true })
    .then(response => {
      this.setState({
        blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
        totalCount: response.data.meta.total_records,
        isLoading: false
      });
    })
    .catch(err => {
      console.log("getBlogItems", err);
    });
  }


  handleSuccessfulNewBlogSubmission(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    });
  }


  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }


  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
          return (
            <div key={blogItem.id} className="admin-blog-wrapper">
              <BlogItem  blogItem={blogItem} />
              <a className="trash-icon" onClick={() => this.handleDeleteClick(blogItem)}><FontAwesomeIcon icon="trash" /></a>
            </div>

          )
      }else {
          return <BlogItem key={blogItem.id} blogItem={blogItem} />}
    });
    return (
      <div className="blog-container">
        <Helmet>
          <title>Web Development Blog - Chandler King</title>
          <meta name="description" content="Read the most recent blog posts from full stack web development Chandler King." />
        </Helmet>  
        <PageBanner background={blogImg} title="Blog" className="blog-page-banner" />
        <BlogModal 
          handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
          modalIsOpen={this.state.blogModalIsOpen} 
          handleModalClose={this.handleModalClose} 
        />
        <div className="content-container">{blogRecords}</div>
        {this.props.loggedInStatus === "LOGGED_IN" ?
          <div className="new-blog-link">
            <a onClick={this.handleNewBlogClick}>
              < FontAwesomeIcon icon="plus-square" />
            </a>
          </div> : null}
        {this.state.isLoading  ? 
        <div className= "loading-content-wrapper">
          < FontAwesomeIcon icon="spinner" spin />
        </div> : null}
        <Footer linkOne="/contact-me" linkOneName="Contact Me" linkTwo="/about-me" linkTwoName="About Me" />
      </div>
    );
  }
}