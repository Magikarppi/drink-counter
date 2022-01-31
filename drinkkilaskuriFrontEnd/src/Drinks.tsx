import React from 'react';
import { View, ScrollView } from 'react-native';
import Drink from './Drink';
import { DrinksProps } from './types';

const Drinks = ({ drinkList, addToFavorites, removeDrink }: DrinksProps) => {
  if (!drinkList || drinkList.length < 1) {
    return null;
  }

  return (
    <ScrollView>
      <View style={{ flexDirection: 'column-reverse' }}>
        {drinkList.map((drink, i) => {
          return (
            <Drink
              key={i}
              drink={drink}
              addToFavorites={addToFavorites}
              removeDrink={removeDrink}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Drinks;
