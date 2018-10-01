import * as React from 'react';
/*import WeatherIcons from 'react-weathericons';*/
import './App.css';
import Form from './components/Form';

import Weather from './components/Weather';



const API_KEY = "4df46d54e8018e893694d3c63fa8b7e1";


class App extends React.Component {
  public state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    wind:undefined,
    windd:undefined
   


  }
   public  getWeather = async (e:any) => {
    e.preventDefault()
    const GET_CITY= e.target.elements.City.value
    const GET_COUNTRY = e.target.elements.Country.value
 
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${GET_CITY},${GET_COUNTRY}&appid=${API_KEY}&units=metric`);

                                        
    const data = await API_CALL.json();
   
   if(GET_CITY&&GET_COUNTRY){
 

    this.setState(
     {
       temperature: data.main.temp,
         city: data.name,
         country: data.sys.country,
         humidity: data.main.humidity,
         description: data.weather[0].description,
         wind:data.wind.speed,
         windd:data.wind.deg,
         error: ""
       
 
     }
   
    
    )
   
    }
else
  {
   
    this.setState(
      {
        temperature: undefined,
          city:undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          wind:undefined,
          windd:undefined,
          error: "Please enter city and country"
        
  
      }

    )
  }
    
  }
    
  public render() {
    
    return (
      
        <div>
          
          
          <div className="wrapper">
    
          <div className ="col-8 mx-auto weather">
            <h1>Find out temperature...</h1>
          <Form getWeather={this.getWeather} />
          
              <div className="container">
                <div className="row">
                 
                 
                
                 
                    
                    <Weather 
                      temperature={this.state.temperature} 
                      humidity={this.state.humidity}
                      city={this.state.city}
                      country={this.state.country}
                      description={this.state.description}
                      error={this.state.error}
                      wind={this.state.wind}
                      windd={this.state.windd}
                    />
                  </div>
            
              </div>
              </div>
            </div>
     
            </div>
    
        
    )
  }
    
}


export default App;
