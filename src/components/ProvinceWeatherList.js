import React, { PureComponent } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Fonts } from '../utils/fonts';


const mockedWeather = [
  {degrees: 7, message: 'Cloudy', location: 'Valle Nuevo', L:45, H:58},
  {degrees: 28, message: 'Partly Cloud', location: 'Moca', L:29, H:33},
  {degrees: 39, message: 'Sunny', location: 'Barahona', L:55, H:17},
  {degrees: 10, message: 'Rainny', location: 'Constanza', L:80, H:66},
]

class ProvinceWeatherList extends PureComponent {

  
  WeatherCard = (item) => (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={['#00B0FF', '#00B0FF']} 
      style={styles.gradientCard}>

      <Text style={styles.text}> {item} </Text>

    </LinearGradient>
  );

  render() {
    return (
      <View style={{backgroundColor: 'gray', height: 100}}>
        
        <FlatList 
          data={ this.mockedWeather }
          keyExtractor={ (element, index) => `${element}${index}` }
          renderItem={( item ) => this.WeatherCard(item)}
        />
      </View>
    );
  }
}

export default ProvinceWeatherList;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.OpenSans
  },
  gradientCard: {
    height: 50,
    borderWidth: 1
  }
});