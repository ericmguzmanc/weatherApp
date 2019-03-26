import React, { PureComponent } from 'react';

import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Headline } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import { Fonts } from '../utils/fonts';

import ProvinceWeatherList from '../components/ProvinceWeatherList';

class Weather extends PureComponent {
  static navigationOptions =  {
    header: null
  };


  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor="#0081cb"/>
        {/* <View style={styles.headerContainer} > */}
          {/* <Headline style={{fontFamily: Fonts.OpenSans}}>Weather</Headline> */}
        <LinearGradient 
          start={{x: 0, y: 0}} 
          end={{x: 1, y: 0}} 
          colors={['#00B0FF', '#00B0FF']} 
          style={styles.headerContainer}>

          <Text style={styles.text}> Sunny </Text>

        </LinearGradient>
        {/* </View> */}

        <View style={styles.bodyContainer}>
          <Text style={styles.text}> Weather List goes here.  </Text>
          <Text style={{fontFamily: Fonts.OpenSans}}> Sample text goes here </Text>

          {/* FlatList goes here */}
          <ProvinceWeatherList />
        </View>
      </View>
      // <View style={{flex: 1}}>
      //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      // </View>
    );
  }
}

export default Weather;


const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: 'lightgray',
    // height: 200
  },
  headerContainer: {
    flex:1.2,
    height: '80%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#00b0ff',
    zIndex: 0,
  },
  bodyContainer: {
    flex:2.5,
    // height: 500, 
    marginTop: '40%',
    zIndex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: '8%',
    paddingLeft: '8%',
    paddingRight: '8%',
    elevation: 10

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