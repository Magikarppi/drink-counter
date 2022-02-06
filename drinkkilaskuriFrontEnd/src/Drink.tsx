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
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.violet,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    marginRight: 15,
  },
  property: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    // different flexes for star n trash 3 3 3 1 1 ?
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
    <View style={styles.cont}>
      <View style={styles.container}>
        <View
          style={{ ...styles.property, flex: 3, justifyContent: 'flex-start' }}
        >
          <Text style={styles.text}>{drink.name}</Text>
        </View>
        <View style={{ ...styles.property, flex: 2 }}>
          <Text style={styles.text}>{`${drink.alcPercent} %`}</Text>
        </View>
        <View style={{ ...styles.property, flex: 2 }}>
          <Text style={styles.text}>{`${drink.amount} dl`}</Text>
        </View>
        <TouchableOpacity onPress={() => addToFavorites(drink)}>
          <View style={{ ...styles.property, flex: 2 }}>
            <Ionicons name="star-outline" size={30} color={colors.beige} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeDrink(drink)}>
          <View style={{ ...styles.property, flex: 2 }}>
            <Ionicons name="trash-outline" size={30} color={colors.violet} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drink;
