import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '7576e01f1ba67cc4cf3c86afc27f72ac'

export const fetchWeather = async(query)=>{
    const { data } = await axios.get(URL , {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    
    return data;
}