// import React, { Component } from 'react';
// import Title from './components/Title';
// import Search_bar from './components/Search_bar';
// import Weather from './components/Weather';
// import * as data from '../api/weather_14.json';


const API_KEY = "d0ae4271fe238991dc50293837d2f193";

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: [],
          city: [],
          cityInput: '',
          submit: ''
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
 
    handleChange(e) {
        this.setState({
          cityInput: e.target.value
        });
      }
    getWeather = async (e) => {
    e.preventDefault();
    this.setState({
      cityInput:  '',
        submit: e.target.elements.city.value
    });
    const citys = e.target.elements.city.value;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys},uk&appid=${API_KEY}`)
    // await fetch(`./api/weather_14.json`)
    .then(response => response.json())
    .then(data => {
        this.setState({
            data: data
        })
    })
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
      
        return(
            <div>
                <Title />
                <Search_bar getWeather={this.getWeather} handleChange={this.handleChange} value={this.state.cityInput}/>
                <Weather />
                <ul>
                <li>city = {this.state.data.name}</li>
                    <li>city = {this.state.cidty}</li>
                    <li>cityInput = {this.state.cityInput}</li>
                    <li>{this.state.error}</li>
                </ul>
            </div>            
        );
    }
}
export default App