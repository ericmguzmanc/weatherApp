import React, { PureComponent } from 'react';

import { View, FlatList, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import Icon from '../utils/weatherIcon';

import { getGradientColors, getWeatherColors, getWeatherIcons } from '../utils/functions/util';
import { Fonts } from '../utils/fonts';


const mockedWeather = [
  {degrees: 7, message: 'Sunny', location: 'Valle Nuevo', L:45, H:58},
  {degrees: 28, message: 'Partly Cloud', location: 'Moca', L:29, H:33},
  {degrees: 39, message: 'Sunny', location: 'Barahona', L:55, H:17},
  {degrees: 10, message: 'Rainny', location: 'Constanza', L:80, H:66},
  {degrees: 7, message: 'Cloudy', location: 'Valle Viejo', L:45, H:58},
  {degrees: 28, message: 'Storm', location: 'Moca', L:29, H:33},
  {degrees: 39, message: 'Sunny', location: 'Barahona', L:55, H:17},
  {degrees: 10, message: 'Rainny', location: 'Constanza', L:80, H:66},
]

class ProvinceWeatherList extends PureComponent {


  WeatherCard = (item) => {
    return (
      (item.location !== mockedWeather[0].location) ?
      ( renderSecondaryRecords(item) ) :
      ( renderFirstRecord(item) )
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

const renderFirstRecord = (item) => {

  return (
    <View style={styles.initialCard}>
      <Text style={{flex:1, fontFamily:Fonts.OpenSansBold, fontSize: 23, paddingTop:20, color: 'black'}}>Weather</Text>

      <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={['white', 'white']} 
      style={styles.initialCardItem}>

        <View style={{flex:0.4, flexDirection: 'row', borderWidth:0}}>
          <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Text style={{color:'#424242', fontFamily: Fonts.OpenSans, fontSize: 15}}>{item.location}</Text>
          </View>
        </View>
        <View style={{flex: 1.5, flexDirection: 'row'}}>
          <View style={[styles.cardLeftFlex, { borderWidth: 0 }]}>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', paddingBottom: 5 }}>
              {/* Dynamic Icon in first Row */}
              <Icon name={getWeatherIcons(item.message)} size={60} color={getWeatherColors(item.message)} solid/>
              <Text style={[styles.mainCardFontStyle, { fontSize: 18 }]}> {item.message} </Text>
            </View>
          </View>
          <View style={styles.cardRightFlex}>
            <View style={{flex:1, borderWidth:0, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={[styles.mainCardFontStyle, { fontSize: 35 }]}> {item.degrees}&#176; </Text>
              <Text style={[styles.mainCardFontStyle, { fontSize: 12, color: 'gray' }]}> H{item.H}&#176; </Text>
              <Text style={[styles.mainCardFontStyle, { fontSize: 12, color: 'gray' }]}> L{item.L}&#176; </Text>
            </View>
          </View>
        </View>

      </LinearGradient>

    </View>
  );
}


const renderSecondaryRecords = (item) => {
  const gradientColors = getGradientColors(item.message);
  return (
    <LinearGradient 
    start={{x: 0, y: 0}} 
    end={{x: 1, y: 0}} 
    colors={gradientColors} 
    style={styles.gradientCard}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={[styles.cardLeftFlex, { alignItems: 'flex-start' }]}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={[styles.cardText, styles.cardTextHeader]}> {item.message} </Text>
              <Text style={[styles.cardText]}> {item.location} </Text>
            </View>
            <View style={{flex: 0.6, width: '100%', flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center'}}>
              <Icon name={getWeatherIcons(item.message)} size={45} color='white' solid/>
            </View>
          </View>
        </View>
        <View style={styles.cardRightFlex}>
          <View style={{flex:1, borderWidth: 0}}></View>
          <View style={{flex:1, borderWidth:0, alignItems: 'center'}}>
            <Text style={[styles.cardText, styles.cardTextHeader, styles.cardRightTextDegree]}> {item.degrees}&#176; </Text>
            <Text style={[styles.mainCardFontStyle, { fontSize: 12, color: 'white' }]}> H{item.H}&#176; </Text>
            <Text style={[styles.mainCardFontStyle, { fontSize: 12, color: 'white' }]}> L{item.L}&#176; </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  initialCard: {
    flex:1, 
    flexDirection: 'column'
  },
  initialCardItem: {
    flex:1, 
    // flexDirection: 'column',
    height: 150,
    width: 330,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    elevation: 2,
    // borderWidth: 1,
    // borderColor: 'red'
  },
  mainCardFontStyle: {
    fontFamily: Fonts.OpenSans, 
    color: '#212121'
  },
  cardText: {
    fontFamily: Fonts.OpenSans,
    color: 'white',

  },
  cardTextHeader: {
    fontFamily: Fonts.OpenSansBold
  },
  gradientCard: {
    height: 110,
    borderWidth: 0,
    width: 330, 
    // borderWidth: 1,
    marginBottom: 25,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    elevation: 10,
  },
  flatListContainer: {
    height: "100%",
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardRightTextDegree: {
    fontSize: 25,
    fontFamily: Fonts.OpenSans,
  },
  cardRightFlex: {
    flex: 1, 
    marginRight: 10,
    borderWidth: 0, 
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  cardLeftFlex: {
    flex: 1, 
    marginLeft: 10,
    // borderWidth: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCardLocationText: {
    fontFamily: Fonts.OpenSansBold, 
    fontSize: 14, 
    color: '#212121', 
  }
});