import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from './CustomButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbc8a7',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '15%'
  },
  elementContainer: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#76447c',
    fontSize: 27,
  },
});

const MainHeader = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.elementContainer} />
      <View style={styles.elementContainer}><Text style={styles.text}>Drinkkilaskuri</Text></View>
      <View style={styles.elementContainer}>
        <CustomButton openOrClose={} />
      </View>
    </View>
  );
};

export default MainHeader;