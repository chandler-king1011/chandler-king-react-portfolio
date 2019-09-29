import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Login extends Component {
  constructor(props) {
  super(props);

  this.state = {
      email: "",
      password: "",
      errorText: "",
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}



handleSubmit(event) {
    axios.post("https://api.devcamp.space/sessions", 
    {
        client: {
            email: this.state.email,
            password: this.state.password
        }
    },
    { withCredentials: true }
    ).then(response => {
        if (response.data.status === "created") {
            this.props.handleSuccessfulAuth();
        } else {
            this.setState({
                errorText: "Wrong E-mail, or password was entered. Please try again."
            });
            this.props.handleUnSuccessfulAuth();
        }
    }).catch(error => {
        this.setState({
            errorText: "An error occurred. Please try again shortly."
        });
        this.props.handleUnSuccessfulAuth();
    });
    event.preventDefault();
}




handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
        errorText: "" 
    })
}




  render() {
    return(
        <div className="login-form">
            <h1 className="login-header">LOGIN TO ACCESS YOUR DASHBOARD</h1>
            <div className="login-error">{this.state.errorText}</div>
            <form className="one-column" onSubmit={this.handleSubmit}>
               <div className="input-group">
                <FontAwesomeIcon icon="envelope" />
                <input 
                    type="email"
                    name="email"
                    placeholder="E-Mail"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="input-group">
                <FontAwesomeIcon icon="lock" />
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </div>
    
                <button className="btn" type="submit">Login</button>
                
            </form>
           
        </div>
    )
}
}