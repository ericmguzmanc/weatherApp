import React, { PureComponent } from 'react';

import { View, StyleSheet } from 'react-native';

import { Fonts } from '../utils/fonts';

import ProvinceWeatherList from '../components/ProvinceWeatherList';

class Weather extends PureComponent {
  static navigationOptions =  {
    header: null
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.bodyContainer}>
          <ProvinceWeatherList />
        </View>
      </View>
    );
  }
}

export default Weather;

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex:1.2,
    height: '80%',
    width: '100%',
  },
  bodyContainer: {
    flex:2.5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 15,
    color: 'black'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
});