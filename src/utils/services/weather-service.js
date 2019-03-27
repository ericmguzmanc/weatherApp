import axios from 'axios';

import { cityIds } from '../constants/index';

let instance = null;
class WeatherService {

  constructor() {
    if(!instance) {
      instance = this;
    }
    this.url = `api.openweathermap.org/data/2.5/`;
    this.apiKey = process.env.APIKEY;

    return instance
  }

  async getWeatherList() {
    const weatherList = await axios.get(`${this.url}/group?id=${cityIds}&APPID${this.apiKey}`);
    return weatherList;
  }

  async getWeatherById() {
    // TODO
  }

}

export default new WeatherService();