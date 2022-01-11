import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors } from './themes';
import { DrinkType } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 50
  },
  property: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    borderWidth: 1,
    borderColor: colors.violet,
    borderBottomColor: colors.backgroundDark,
    borderTopColor: colors.backgroundDark
  },
  text: {
    fontSize: 15,
    color: colors.white
  }
});

interface DrinkProps {
  drink: DrinkType
  addToFavorites: (drink: DrinkType) => void;
}

const Drink = ({ drink, addToFavorites }: DrinkProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.property}>
        <Text style={styles.text}>{drink.name}</Text>
      </View>
      <View style={styles.property}>
        <Text style={styles.text}>{drink.alcPercent}</Text>
      </View>
      <View style={styles.property}>
        <Text style={styles.text}>{drink.amount}</Text>
      </View>
      <TouchableOpacity onPress={() => addToFavorites(drink)}>
        <View style={styles.property}>
          <Ionicons name='star' size={40}  />
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default Drink;