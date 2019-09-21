import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import RichTextEditor from '../forms/rich-text-editor';



export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog_status: "",
      content: "",
      featured_image: ""
  };

  this.handleChange=this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleRichTextChange=this.handleRichTextChange.bind(this);
  this.componentConfig = this.componentConfig.bind(this);
  this.djsConfig = this.djsConfig.bind(this);
  this.handleFeaturedImgDrop = this.handleFeaturedImgDrop.bind(this);

  this.featuredImgRef = React.createRef();
};

handleFeaturedImgDrop() {
    return {
        addedfile: file => this.setState({
            featured_image: file
        })
    };
};

componentConfig() {
    return {
        iconFiletypes: [".jpg", ".png"],
        showFiletypeIcon: true,
        postUrl: "https://httpbin.org/post"
    };
};

djsConfig() {
    return{
        addRemoveLinks: true,
        maxFiles: 1
    };
};

handleRichTextChange(content) {
    this.setState({ content });
};

buildForm() {
    let formData = new FormData();

    formData.append("portfolio_blog[title]", this.state.title);
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);
    formData.append("portfolio_blog[content]", this.state.content);

    if (this.state.featured_image) {
    formData.append("portfolio_blog[featured_image]", this.state.featured_image);
    };
    return formData;
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit(event) {
    axios.post("https://chandlerking.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), { withCredentials: true }).then(response => {
        this.featuredImgRef.current.dropzone.removeAllFiles();
        this.setState ({
            title: "",
            blog_status: "",
            content: "",
            featured_image: ""
        });
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
        
    }).catch(error => {
        console.log("handleSubmit for blog error", error);
    });


    
    event.preventDefault();
}

  render() {
    return(
        <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
            <div className="two-column">
            <input
             type="text"
             onChange={this.handleChange}
             name="title"
             placeholder="Blog Title"
             value={this.state.title}
              />
            <input 
            type="text"
            onChange={this.handleChange}
            name="blog_status"
            placeholder="Blog Status"
            value={this.state.blog_status}
            />
            </div>
            <div className="one-column">
            <RichTextEditor
            handleRichTextChange={this.handleRichTextChange}
             />
            </div>
            <div className="edit-img-wrapper">
                <DropzoneComponent
                    ref={this.featuredImgRef}
                    config={this.componentConfig()}
                    djsConfig={this.djsConfig()}
                    eventHandlers={this.handleFeaturedImgDrop()}>
                        <div className="dz-message">Featured Image</div>
                </DropzoneComponent>
            </div>
            <button className="btn">Save</button>
        </form>
    )
}
}