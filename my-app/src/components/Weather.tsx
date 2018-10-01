

import * as React from 'react';


export interface Iprops{
    temperature: any,
    city: any,
    country: any,
    humidity: any,
    description: any,
    error: any
    wind:any,
    windd:any
   
}


class Weather extends React.Component<Iprops> {

    public render(){

        return(
            <div className="container">
			<div className="row">
            <div className="weather__error">
                {
                    this.props.error && <p>{this.props.error}</p>
                    }
              
                </div>
			
            <div className ="weather__info ">
            <div>
                <div className="weather-head">
                <h1 id="Header" className="text-center display-4">
                {
                    this.props.city && this.props.country && <p>{this.props.city},{this.props.country}</p>
                    }
                    </h1>
                    </div>
                    <div className = "row ">
                    <div id="description" className="description col-6 text-center">
                    {
                    this.props.description && <p>{this.props.description}</p>
                    }
                    </div>
                    <div id="temperature" className="col-6 text-center">
                {
                    this.props.temperature && <p>{this.props.temperature}°C</p>
                    }
                    </div>
                    </div>
                   
                   
                  <div className="row">
                  <div id="humidity" className="humidity-data col-4 text-center">
                {
                    this.props.humidity && <p><span>Humidity Level:   </span>{this.props.humidity}%</p>
                    }
                    </div>
                    <div id="wind" className="wind-data col-4 text-center">
                {
                    this.props.wind && <p><span>Wind speed: </span>{this.props.wind}km/s</p>
                    }
                    
                    </div>
            
            <div id="wind-degree" className="wind-degree-data col-4 text-center">
            {
                    this.props.windd && <p><span>Wind Degree: </span>{this.props.windd}°</p>
                    }
                </div>
                
                </div>
          </div>
          </div>
          </div>
          </div>
       
        );

    }
}; 

export default Weather;
