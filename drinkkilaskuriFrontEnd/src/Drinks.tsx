import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Drink from './Drink';
import { DrinksProps, DrinkType } from './types';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '100%',
    borderColor: 'grey',
    borderWidth: 2,
    paddingVertical: 5,
  },
  infoText: {
    fontSize: 15,
  },
});

const Drinks = ({ drinkList }: DrinksProps) => {
  if (!drinkList || drinkList.length < 1) {
    return null;
  }
  const addToFavorites = (drink: DrinkType) => {
    console.log('add Favorite, ' ,drink.alcPercent)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {drinkList.map((drink, i) => {
          return (
            <Drink key={i} drink={drink} addToFavorites={addToFavorites} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Drinks;
