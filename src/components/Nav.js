import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

    constructor(props) {
        super(props);
    this.navigateHome = this.navigateHome.bind(this);
    }

    navigateHome(onLocation=fasle, history = null) {
        console.log(history)
        console.log(onLocation)
        onLocation ? history.push({pathname: '/'}): null;
    }
  
    render() {
        return (
            <div>
                {/* <form onSubmit={() => this.Nav(this.props.onLocation,this.props.history)}> */}
                    <button onClick={() => this.navigateHome(this.props.onLocation,this.props.history)}>go Back</button>
                {/* </form> */}
            </div>
        );
    }
}
export default Nav