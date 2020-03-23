import React, { Component } from 'react';
import Axios from 'axios';


class ContactForm extends Component {
  constructor(props) {
  super(props);

  this.state = {
      name: "",
      email: "",
      message: "",
      responseMessage: ""
  }
  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);

}


  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value,
        responseMessage: ""
    })
  }

  onSubmit(e) {
      e.preventDefault();
      let message = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
      Axios({
        method: "POST",
        url: "https://api-king-contact.herokuapp.com/messages",
        data: message
      }).then(response => {
        if (response.status==200) {
            this.setState({
                responseMessage: "Your message has been sent. I will reach out shortly!",
                name: "",
                email: "",
                message: ""
            })
        } else {
            this.setState({
                responseMessage: "An error occurred. Please try again shortly."
            })
        }
      }).catch(error => {
        console.log(error);
      });
  }


  render() {
    return(
        <div className="contact-form-wrapper">
            <div className="contact-form__title">Send me a message to connect!</div>
            <form className="contact-form" onSubmit={this.onSubmit}>
                <div className="contact-form__input-wrapper">
                    <input className="contact-form__input" type="text" placeholder="Your Name" name="name" value={this.state.name} onChange={this.onChange} />
                    <input className="contact-form__input" type="text" placeholder="Your Email" name="email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <textarea className="contact-form__text" type="text" placeholder="Message" name="message" value={this.state.message} onChange={this.onChange}/>
                <div className="contact-form__response-message">{this.state.responseMessage}</div>
                <button className="contact-form__button" type="submit">Send Message</button>
            </form>
        </div>
    )
}
}

export default ContactForm;