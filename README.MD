### Description
WeatherApp

### Demo 
[View Demo](https://weather-app-234208.appspot.com/)

<p align="center">
<img width="200px" height="400px" src ="./www/img/demo.png" /></p>

### Technologies
* Android Hybrid
* [Openweathermap api](https://openweathermap.org/)
* ReactJS
* Webpack
* Localforage

### Prerequisites to run
* [Cordova](https://cordova.apache.org/)
* [Node.js](https://nodejs.org/en/download/)
* [Android Studio](https://developer.android.com/studio)

### Installing
Clone the project:
```
$ git clone https://github.com/longnguyendr/react-webpack.git
```
Install the dependencies:
```
$ cd react-webpack
$ npm install
```
Add platform:
```
$ cordova platform add browser 
```
or
```
$ cordova platform add android 
```
Login and download the Api_key at [Openweathermap](https://openweathermap.org/)
```
$ Create a file called "apiKey.json" in root folder and add the following object to the file:
$
{
    "openWeatherKey": "Your API_KEY"
}
```
Build the package:
```
$ npm run build-dev (for development mode) or npm run build-prod (for production mode)
```
Run the App:
```
$ cordova run android 
```
or
```
$ cordova run browser
```
### Author
Long Nguyen
