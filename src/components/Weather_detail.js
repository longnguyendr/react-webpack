import React, { Component } from 'react';
import {withRouter ,Link } from 'react-router-dom';
import '../components/Weather_detail.css';


class Weather_detail extends Component {
    constructor(props) {
        super(props);
        
        this.state=({
            test: ''
        });
        this.navigateToHome = this.navigateToHome.bind(this);
      }
    navigateToHome() {
      
        this.setState({
            test: 'click work ok!!'
        })
      }
    render () {
        
        console.log(this.props);
        console.log(this.props.location);

        return (
            <div className="diveStyle">
            <form>
                <button onClick={this.navigateToHome}> Click me</button>
            </form>
                    <div>{this.state.test}</div>
                    <div>Successful</div>
            </div>  
        );
    }
}

export default Weather_detail