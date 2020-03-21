import React, { Component } from 'react';


class ContactForm extends Component {
  constructor(props) {
  super(props);

  this.state = {
      name: "",
      email: "",
      message: ""
  }
  this.onChange=this.onChange.bind(this);
  this.onSubmit=this.onSubmit.bind(this);

}


  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
      e.preventDefault();
      this.props.contactFormSubmit(this.state);
  }


  render() {
    return(
        <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={this.onSubmit}>
                <div className="contact-form__input-wrapper">
                    <input className="contact-form__input" type="text" placeholder="Your Name" name="name" value={this.state.name} onChange={this.onChange} />
                    <input className="contact-form__input" type="text" placeholder="Your Email" name="email" value={this.state.email} onChange={this.onChange}/>
                </div>
                <textarea className="contact-form__text" type="text" placeholder="Message" name="message" value={this.state.message} onChange={this.onChange}/>
                <button className="contact-form__button" type="submit">Send Message</button>
            </form>
        </div>
    )
}
}

export default ContactForm;