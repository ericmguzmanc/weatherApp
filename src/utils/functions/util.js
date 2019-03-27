export const getGradientColors = (weather) => {
  switch(weather) {
    case 'Cloudy':
      return ['#616161', '#9E9E9E', '#78909C'];
    case 'Partly Cloud':
      return ['#607D8B', '#90A4AE', '#81D4FA'];
    case 'Sunny':
      return ['#FFA000', '#FDD835', '#81D4FA'];
    case 'Rainny':
      return ['#039BE5', '#81D4FA', '#90A4AE'];
    case 'Storm':
      return ['#616161', '#90A4AE', '#FDD835'];
    default: 
      return ['#039BE5', '#29B6F6', '#81D4FA'];
  }
};
export const getWeatherIcons = (weather) => {
  switch(weather) {
    case 'Cloudy':
      return 'wi-cloudy';
    case 'Partly Cloud':
      return 'wi-day-cloudy';
    case 'Sunny':
      return 'wi-day-sunny';
    case 'Rainny':
      return 'wi-rain';
    case 'Storm':
      return 'wi-storm-showers';
    default: 
      return 'wi-cloud';
  }
};
export const getWeatherColors = (weather) => {
    switch(weather) {
      case 'Cloudy':
        return '#616161';
      case 'Partly Cloud':
        return '#607D8B';
      case 'Sunny':
        return '#FFA000';
      case 'Rainny':
        return '#039BE5';
      default: 
        return '#039BE5';
  };
};