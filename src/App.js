import React, { Component } from 'react';
import Title from './components/Title';
import Search_bar from './components/Search_bar';
import Weather from './components/Weather';
import styles from './components/Suggestion.css';

const cityData = require('../www/citylist/citylist.json');
const API_KEY = "d0ae4271fe238991dc50293837d2f193";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            city_name: '',
            cityInput: '',
            submit: '',
            errormessage: '',
            country: '',
            dropdown: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getWeather = this.getWeather.bind(this);
      }
    // set delay times
    delayTime = async (ms) => {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      };
    //Input on change event
    handleChange = async (e) => {
        this.setState({
          cityInput: e.target.value
        });
        if(e.target.value != null){
            this.setState({dropdown: 'dropdown-open'});
            await this.delayTime(500);
            let cityOutput;
            cityOutput = cityData.filter(i => i.name.trim().toLowerCase().startsWith(this.state.cityInput.toLowerCase().trim())); // change code here
            cityOutput = (cityOutput.length === 0) ? [] : cityOutput.slice(0,5);
            let results = (this.state.cityInput.length > 0) ? this.setState({data: cityOutput}) : this.setState({data:[]});
            return results
        }
    }
    // Suggestion on Click event
    handleClick = (i) => {
        console.log(i.target.id);
        this.setState({
            dropdown: "dropdown-close",
            cityInput: i.target.id
        });
    }

    // get weather on submit button
    getWeather = async (e) => {
        e.preventDefault();
        this.setState({
            submit: e.target.elements.city.value
        });
        const citys = e.target.elements.city.value;
    }
    render (){
        // console.log(this.state.data);
        const data = this.state.data.map((i) => <li className={this.state.dropdown} onClick={this.handleClick} id={i.name}> {i.name}</li>)
        return(
            <div>
                <Title />
                <Search_bar 
                    getWeather={this.getWeather} 
                    handleChange={this.handleChange} 
                    value={this.state.cityInput}
                />
                <Weather />
                <div>
                    <ul > 
                        {data} 
                    </ul>
                </div>
                <ul>
                    <li>cityInput = {this.state.cityInput}</li>
                </ul>
            </div>            
        );
    }
}
export default App