import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

class LandingQuotes extends Component{
    constructor(props){
        super(props);

        this.state = {
            quotes: this.props.quotes,
            counter: 0
        }

        this.quoteRightClick = this.quoteRightClick.bind(this);
        this.quoteLeftClick = this.quoteLeftClick.bind(this);
    }

    quoteRightClick() {
        if (this.state.counter < this.state.quotes.length - 1) {
            this.setState({
                counter: (this.state.counter + 1)
            })
        } else {
            this.setState({
                counter: 0
            });
        }
    }

    quoteLeftClick() {
        if (this.state.counter > 0) {
            this.setState({
                counter: (this.state.counter - 1)
            })
        } else {
            this.setState({
                counter: 0
            });
        }
    }


    render() {
        return (
            <div className="landing-quotes">
                {this.state.counter > 0 ? 
                <a onClick={this.quoteLeftClick}><FontAwesomeIcon icon={"chevron-circle-left"} /></a> :
                <a className="unactive"><FontAwesomeIcon  icon={"chevron-circle-left"} /></a>}
                <div className="landing-quotes__quote-wrapper">
                    <div className="landing-quotes__content">"{this.state.quotes[this.state.counter].quotes_content}"</div>
                    <div className="landing-quotes__author">-{this.state.quotes[this.state.counter].quotes_author}</div>
                </div>
                <a onClick={this.quoteRightClick}><FontAwesomeIcon icon={"chevron-circle-right"} /></a>
            </div>
        )
    }
}

export default LandingQuotes;
