import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import React from 'react'
import Footer from './components/footer'
const API_key = '1e6f17b1447f6ec14ab337567a20f7f4'


class App extends React.Component {
  constructor(){
    super();
    this.state={}
    this.get_weather()
  }
  get_weather = async() =>{
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Simferopol,ua&units=metric&mode=json&appid=1e6f17b1447f6ec14ab337567a20f7f4')
    const response = await api_call.json();
    console.log(response);
  
  this.setState({
    temp:response.main.temp
  })
}
  render(){
  return (
  <div>
    <Header temp={this.state.temp}/>
    <Footer />
  </div>
  );
}
}

export default App;
