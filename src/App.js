import React ,{ useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import './App.css'

const App = () =>{
    const [query , setQuery] = useState('');
    const [weatherData, setWeatherData] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);

            setWeatherData(data);
            setQuery('');
        }
        

    }
    return(
        <div className="main-container">
            <input
                type = 'text'
                className="search"
                placeholder="Search..."
                value = {query}
                onChange = {(e)=>setQuery(e.target.value)}
                onKeyDown={search} 
            />
             {/* // new thing */}
                {weatherData.main && (
                    <div className="city">
                        <h2 className="city-name">
                            <span>{weatherData.name}</span>
                            <sup>{weatherData.sys.country}</sup> 
                        </h2>
                        <div className="city-temp">
                            {Math.round(weatherData.main.temp)}
                            <sup>°c</sup>
                        </div>
                        <div className="info">
                        <img 
                            className="city-icon" 
                            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                            alt={weatherData.weather[0].description}
                         />
                         <p className="info-text">{weatherData.weather[0].description}</p>

                        </div>
                    </div>
                )}
        </div>
    )
}

export default App;