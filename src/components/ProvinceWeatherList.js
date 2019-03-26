import React, { PureComponent } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Fonts } from '../utils/fonts';


const mockedWeather = [
  {degrees: 7, message: 'Cloudy', location: 'Valle Nuevo', L:45, H:58},
  {degrees: 28, message: 'Partly Cloud', location: 'Moca', L:29, H:33},
  {degrees: 39, message: 'Sunny', location: 'Barahona', L:55, H:17},
  {degrees: 10, message: 'Rainny', location: 'Constanza', L:80, H:66},
  {degrees: 7, message: 'Cloudy', location: 'Valle Nuevo', L:45, H:58},
  {degrees: 28, message: 'Partly Cloud', location: 'Moca', L:29, H:33},
  {degrees: 39, message: 'Sunny', location: 'Barahona', L:55, H:17},
  {degrees: 10, message: 'Rainny', location: 'Constanza', L:80, H:66},
]

class ProvinceWeatherList extends PureComponent {

  
  getGradientColors = (weather) => {

    // colors: {
    //   'cloudy': ['#616161', '#9E9E9E', '#BDBDBD'],
    //   'partlyCloudy': ['#546E7A', '#78909C', '#B0BEC5'],
    //   'Sunny': ['#FBC02D', '#FDD835', '#FFEB3B']
    //   'Rainny': ['#039BE5', '#29B6F6', '#81D4FA']
    // };
    // console.log('weather ', weather)
    let weatherColors = [];

    switch(weather) {
      case 'Cloudy':
        return ['#616161', '#9E9E9E', '#BDBDBD'];
      case 'Partly Cloud':
        return ['#607D8B', '#78909C', '#CFD8DC'];
      case 'Sunny':
        return ['#FFA000', '#FDD835', '#FFEB3B'];
      case 'Rainny':
        return ['#039BE5', '#29B6F6', '#81D4FA'];
      default: 
        return ['#039BE5', '#29B6F6', '#81D4FA']
    }


  };

  WeatherCard = (item) => {
    
    const gradientColors = this.getGradientColors(item.message);
    console.log('got in weathercard func ', gradientColors)

    return (
      <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={gradientColors} 
      style={styles.gradientCard}>
      
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.cardLeftFlex}>
          <Text style={[styles.cardText, styles.cardTextHeader]}> {item.message} </Text>
          <Text style={[styles.cardText]}> {item.location} </Text>

        </View>
        <View style={styles.cardRightFlex}>
          <View style={{flex:1, borderWidth: 0}}></View>
          <View style={{flex:1, borderWidth:0, alignItems: 'center'}}>
            <Text style={[styles.cardText, styles.cardTextHeader, styles.cardRightTextDegree]}> {item.degrees}&#176; </Text>

          </View>

        </View>

      </View>

      </LinearGradient>
    );
  };

  render() {
    console.log('got in flatlist render ', mockedWeather)
    return (
      <View style={styles.flatListContainer}>
        
        <FlatList 
          showsVerticalScrollIndicator={false}
          data={ mockedWeather }
          keyExtractor={ (element, index) => `${element}${index}` }
          renderItem={({ item }) => this.WeatherCard(item)}
        />
      </View>
    );
  }
}


export default ProvinceWeatherList;

const styles = StyleSheet.create({
  cardText: {
    fontFamily: Fonts.OpenSans,
    color: 'white',

  },
  cardTextHeader: {
    fontFamily: Fonts.OpenSansBold
  },
  gradientCard: {
    height: 80,
    borderWidth: 0,
    // borderColor: 'gray',
    padding: 5,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 8,
  },
  flatListContainer: {
    height: "130%",
    paddingTop: '6%',
    paddingLeft: '5%',
    paddingRight: '5%',
    // borderWidth: 1,
  },
  cardRightFlex: {
    flex: 1, 
    marginRight: 10,
    borderWidth: 0, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  cardRightTextDegree: {
    fontSize: 25,
    fontFamily: Fonts.OpenSans,

  },
  cardLeftFlex: {
    flex: 1, 
    marginLeft: 10,
    borderWidth: 0, 
    alignItems: 'flex-start',
    justifyContent: 'center'
  }
});