import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors } from './themes';
import { DrinkProps, DrinkType } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: colors.violet,
  },
  property: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,

  },
  text: {
    fontSize: 15,
    color: colors.white
  }
});

// turn favorite star to yellow "star" once user clicks it?

const Drink = ({ drink, addToFavorites }: DrinkProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.property}>
        <Text style={styles.text}>{drink.name}</Text>
      </View>
      <View style={styles.property}>
        <Text style={styles.text}>{`${drink.alcPercent}%`}</Text>
      </View>
      <View style={styles.property}>
        <Text style={styles.text}>{`${drink.amount}dl`}</Text>
      </View>
      <TouchableOpacity onPress={() => addToFavorites(drink)}>
        <View style={styles.property}>
          <Ionicons name='star-outline' size={30} color={colors.beige} />
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default Drink;