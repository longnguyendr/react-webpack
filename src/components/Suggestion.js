import React, {Component} from 'react';

class Suggestion extends Component {
    constructor(props) {
        super(props);
      }
    render(){
       
        const options = this.props.results.map(r => {
            <li key={r.id}>
                {r.name}
            </li>
        })
        return <ul>{options}</ul>
    }
}

export default Suggestion