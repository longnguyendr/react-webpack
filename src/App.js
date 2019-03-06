import React, { Component } from 'react';
import Title from './components/Title';
import Search_bar from './components/Search_bar';
import Weather from './components/Weather';
import styles from './components/Suggestion.css';
import axios from 'axios';
import * as _ from 'lodash';
const apiKey = require('../apiKey.json');
const cityData = require('../www/citylist/citylist.json');

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
            weatherData: [],
            cityInput: '',
            cityId: '',
            submit: '',
            errormessage: '',
            dropdown: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        
        if(this.state.cityInput != null){
            this.setState({dropdown: 'dropdown-open'});
            await this.delayTime(800);
            let cityOutput;
            let cityInputLength = this.state.cityInput.length;
            let cityInput = this.state.cityInput.toLowerCase().trim();
            // cityOutput = cityData.filter(i => i.name.trim().toLowerCase().startsWith(this.state.cityInput.toLowerCase().trim())); // change code here
            
            cityOutput = cityData.filter(i => {
                if(i.name.trim().toLowerCase().startsWith(cityInput)) {
                    if(i.name.length === cityInputLength)
                    {
                        return i.name.trim().toLowerCase() === (cityInput); 
                    }
                    else if (i.name.length > cityInputLength) {
                        return i.name.trim().toLowerCase().slice(0, cityInputLength) === (cityInput); 
                    }
                }
            }); 
            cityOutput = (cityOutput.length === 0) ? [] : cityOutput.slice(0,10);
            let results = (this.state.cityInput.length > 0) ? this.setState({data: cityOutput}) : this.setState({data:[]});
            // console.log(this.state.data);
            return results
        }
    }
    // Suggestion on Click event
    handleClick = (i) => {
        // console.log();
        this.setState({
            dropdown: "dropdown-close",
            cityInput: i.target.getAttribute('name'),
            cityId: i.target.id
        });
    }

    // get weather on submit button
    getWeather = async (e) => {
        e.preventDefault();
        if(this.state.cityInput != null)
        {
            return new Promise((resolve, reject) => {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${this.state.cityId}&APPID=${apiKey.openWeatherKey}&units=metric`)
                     .then( (response) => {
                         // handle success
                         console.log(response);
                         console.log(response.data);
                         console.log(response.data.sys.country);
                         this.setState({
                            weatherData: _.values({data: response.data})
                         })
                     })
                     .catch( (error) => {
                         // handle error
                         console.log(error);
                         reject(error);
                     });     
             });
        }
      
    }
    render (){
        // console.log(this.state.data);
        console.log(this.state.weatherData.map(i => i.id));
        const data = this.state.data.map((i) => <li key={i.id} className={this.state.dropdown} onClick={this.handleClick} id={i.id} name={i.name}> {i.name}, {i.country}</li>)
        return(
            <div>
                <Title />
                <Search_bar 
                    getWeather={this.getWeather} 
                    handleChange={this.handleChange} 
                    value={this.state.cityInput}
                />
              
                <div>
                    <ul> 
                        {data} 
                    </ul>
                </div>  
                <div>
                    {
                        this.state.weatherData.map(city => {
                            return <Weather key={city.id} data={city} />
                        })
                    }
                </div>
               
            </div>            
        );
    }
}
export default App