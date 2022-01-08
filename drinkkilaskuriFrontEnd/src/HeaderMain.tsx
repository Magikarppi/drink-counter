import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from './Buttons/CloseButton';
import SettingsButton from './Buttons/SettingsButton';

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

interface HeaderProps {
  openModal: () => void;
}

const MainHeader = ({openModal}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.elementContainer} />
      <View style={styles.elementContainer}><Text style={styles.text}>Drinkkilaskuri</Text></View>
      <View style={styles.elementContainer}>
        <SettingsButton openModal={openModal} />
      </View>
    </View>
  );
};

export default MainHeader;