import React, { Component } from 'react';
import {withRouter ,Link } from 'react-router-dom';
import styles from './Weather_detail.css';


class Header extends Component {
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
        return (
            <div >
                <button className="diveStyle" onClick={this.navigateToHome}> Click me</button>
            </div>  
        );
    }
}

export default Header