import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from './themes';
import { SexSelectProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    backgroundColor: colors.beige,
  },
  welcomeText: {
    fontSize: 35,
    color: colors.violet,
  },
  infoText: {
    fontSize: 25,
    color: colors.beige,
  },
  buttonText: {
    fontSize: 15,
    color: colors.beige,
  },
});

const SexSelect = ({ handleSexSelect }: SexSelectProps) => {
  return (
    <View style={styles.container}>
      <Text>Olen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleSexSelect('male')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Mies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSexSelect('female')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Nainen</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SexSelect;
