import React from 'react';
import { View, ScrollView } from 'react-native';
import Drink from './Drink';
import { DrinksProps } from './types';

const Drinks = ({
  drinkList,
  addToFavorites,
  removeDrink,
  removeFavorite,
}: DrinksProps) => {
  if (!drinkList || drinkList.length < 1) {
    return null;
  }

  return (
    <ScrollView
      style={{ width: '100%' }}
      contentContainerStyle={{ flexDirection: 'column-reverse' }}
    >
      {drinkList.map((drink, i) => {
        return (
          <Drink
            key={i}
            drink={drink}
            addToFavorites={addToFavorites}
            removeDrink={removeDrink}
            removeFavorite={removeFavorite}
          />
        );
      })}
    </ScrollView>
  );
};

export default Drinks;
