import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { colors } from '../themes';
import { MaxDrinkCountProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  elementWrapper: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: colors.beige,
    borderWidth: 2,
  },
  text: {
    fontSize: 15,
    color: colors.white
  }
});

const MaxDrinkCount = ({ maxDrinkCount, handleSetMaxDrinkCount }: MaxDrinkCountProps) => {

  return (
    <View style={styles.container}>
      <View style={{...styles.elementWrapper, alignItems: 'flex-end'}}>
        <Text style={styles.text}>Aseta raja</Text>
      </View>
      <View style={styles.elementWrapper}>
        <View style={styles.input}>
          <TextInput style={{color: colors.white}} value={maxDrinkCount} onChangeText={handleSetMaxDrinkCount} placeholder='4' keyboardType='number-pad' placeholderTextColor={'grey'} textAlign='center' />
        </View>
      </View>
      <View style={{...styles.elementWrapper, alignItems: 'flex-start'}}>
        <Text style={styles.text}>drinkkiä</Text>
      </View>
    </View>
  )
};

export default MaxDrinkCount;