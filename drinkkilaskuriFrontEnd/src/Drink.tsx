import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from './themes';
import { DrinkProps } from './types';

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 50,
    // marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.violet,
  },
  property: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: colors.white,
    textAlign: 'center',
  },
});

// turn favorite star to yellow "star" once user clicks it?

const Drink = ({ drink, addToFavorites, removeDrink }: DrinkProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.property,
          flex: 4,
          justifyContent: 'center',
        }}
      >
        <Text style={styles.text}>{drink.name}</Text>
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        <Text style={styles.text}>{`${drink.alcPercent} %`}</Text>
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        <Text style={styles.text}>{`${drink.amount} dl`}</Text>
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        <TouchableOpacity onPress={() => addToFavorites(drink)}>
          <Ionicons name="star-outline" size={30} color={colors.beige} />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        <TouchableOpacity onPress={() => removeDrink(drink)}>
          <Ionicons name="trash-outline" size={30} color={colors.violet} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drink;
