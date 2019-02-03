import React, { Component } from 'react';
import Title from './components/Title';
import Search_bar from './components/Search_bar';
import Weather from './components/Weather';
import * as data from '../api/weather_14.json';
import Suggestion from './components/Suggestion';

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
          country: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.getWeather = this.getWeather.bind(this);
      }
    //   componentDidMount() {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=d0ae4271fe238991dc50293837d2f193`)
    //     .then(response => response.json())
    //       .then(data => {
    //           this.setState({ data:data});
    //           console.log(data);
    //         });
    //   }
 
    handleChange = (e) => {
        this.setState({
          cityInput: e.target.value
        });
      }

    getWeather = async (e) => {
        e.preventDefault();
        this.setState({
            submit: e.target.elements.city.value
        });
        const citys = e.target.elements.city.value;
        // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${submitdata}&appid=${API_KEY}`)
        await fetch(`citylist/citylist.json`)
        .then(response => {
                return response.json();
        })
        .then(respond => {
                let cityOutput;
                cityOutput = respond.filter(i => i.name.toLowerCase().startsWith(this.state.cityInput.toLowerCase())); // change code here
                cityOutput = (cityOutput.length >= 5) ? cityOutput : "";
                // [...cityOutput, respond.filter(res => res.country.toLowerCase().include(citys.toLowerCase()))]
               
                console.log(cityOutput)
                if( cityOutput != undefined)
                {
                    return cityOutput.slice(0,5);
                }
              }
        )
        .then((res) => {
            console.log(res)
            if(res != '')
            {
                const data = res.map((i, z= 1) => <li key={i.id}> {z++}/ {i.name}</li>)
                this.setState({
                ...this.state,
                data: data
            })}
            else {
                this.setState({
                    ...this.state,
                    data: <em>No suggestions, you're on your own!</em>
                })
            }
            // console.log(this.state.data)
          })
        // .then(data => {
        //     this.setState({
        //         data: data,
        //         cityInput: ''
        //     })
        //     console.log(this.state.data)
        
        // }) 
   
    // .then(data => {
    //     for(var i = 0; i< data.length; i++) {
    //         if (this.state.submit == data[i].name) {
    //             this.setState({
    //               city: data[i].name
    //             });
    //         }
    //     };
    //   });
    }
    render (){
        // const cityOutput = this.state.data.filter(i => i.name.toLowerCase().startsWith(this.state.cityInput.toLowerCase())); // change code here
        // console.log(cityOutput);
        // const renderOutput = cityOutput.map((i) => <li key={i.name + 1}>{i.name}</li>);
        return(
            <div>
                <Title />
                <Search_bar getWeather={this.getWeather} handleChange={this.handleChange} value={this.state.cityInput}/>
                <Weather />
                <ul>
                    {/* <li>city = {this.state.data.name}</li>
                    <li>cityid = {this.state.data.id}</li> */}
                    {this.state.data}
                    <li>cityInput = {this.state.cityInput}</li>
                </ul>
                {/* <ul>
                    {renderOutput}
                </ul> */}
                {/* <Suggestion results={this.state.data} /> */}
            </div>            
        );
    }
}
export default App