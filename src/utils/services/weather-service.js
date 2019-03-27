import axios from 'axios';

let instance = null;
class WeatherService {

  constructor() {
    if(!instance) {
      instance = this;
    }
    this.url = `api.openweathermap.org/data/2.5/weather?`;
    this.apiKey = process.env.APIKEY;
    
    return instance
  }

}

export default new WeatherService;