import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Weather from '../screens/Weather';

const Navigation = createStackNavigator({
  Weather
}, {
  initialRouteName: 'Weather',
});

export default Navigation;