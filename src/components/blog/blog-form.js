import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import RichTextEditor from '../forms/rich-text-editor';



export default class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      blog_status: "",
      content: "",
      featured_image: "",
      apiUrl: "https://chandlerking.devcamp.space/portfolio/portfolio_blogs",
      apiAction: "post"
  };

  this.handleChange=this.handleChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleRichTextChange=this.handleRichTextChange.bind(this);
  this.componentConfig = this.componentConfig.bind(this);
  this.djsConfig = this.djsConfig.bind(this);
  this.handleFeaturedImgDrop = this.handleFeaturedImgDrop.bind(this);
  this.handleImgDelete = this.handleImgDelete.bind(this);

  this.featuredImgRef = React.createRef();
};

handleImgDelete(imgType) {
    axios.delete(`https://api.devcamp.space/portfolio/delete-portfolio-blog-image/${this.props.blogToEdit.id}?image_type=${imgType}`, { withCredentials: true}).then(response => {
        this.props.featuredImgDelete();
    }).catch(error => {
        console.log("img delete response error" ,error);
    });
}

componentWillMount() {
    if (this.props.editMode) {
        this.setState({
            id: this.props.blogToEdit.id,
            title: this.props.blogToEdit.title,
            blog_status: this.props.blogToEdit.blog_status,
            content: this.props.blogToEdit.content,
            apiUrl: `https://chandlerking.devcamp.space/portfolio/portfolio_blogs/${this.props.blogToEdit.id}`,
            apiAction: "patch"
        });
    }
}

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
    axios({
        method: this.state.apiAction,
        url: this.state.apiUrl,
        data: this.buildForm(),
        withCredentials: true
    }).then(response => {
        if (this.state.featured_image){
        this.featuredImgRef.current.dropzone.removeAllFiles();
    }
        this.setState ({
            title: "",
            blog_status: "",
            content: "",
            featured_image: ""
        });
        if (this.props.editMode) {
            this.props.handleUpdateFormSubmission(response.data.portfolio_blog);
        }else{
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
    }
        
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
            editMode={this.props.editMode}
            contentToEdit={this.props.editMode && this.props.blogToEdit.content ? this.props.blogToEdit.content : null}
             />
            </div>


            {this.props.editMode && this.props.blogToEdit.featured_image_url?
               <div className="edit-img-wrapper">
                    <img src={this.props.blogToEdit.featured_image_url} /> 
                    <div className="img-removal-link"> 
                        <a onClick={() => this.handleImgDelete("featured_image")}>Delete Image</a>
                    </div> 
                </div> :
                <DropzoneComponent
                    ref={this.featuredImgRef}
                    config={this.componentConfig()}
                    djsConfig={this.djsConfig()}
                    eventHandlers={this.handleFeaturedImgDrop()}>
                        <div className="dz-message">Featured Image</div>
                </DropzoneComponent>}
    
        
            <button className="btn">Save</button>
        </form>
    )
}
};