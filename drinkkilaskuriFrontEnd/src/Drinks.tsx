import React from 'react';
import { View, ScrollView } from 'react-native';
import Drink from './Drink';
import { DrinksProps } from './types';

const Drinks = ({ drinkList, addToFavorites }: DrinksProps) => {
  if (!drinkList || drinkList.length < 1) {
    return null;
  }

  return (
    <ScrollView>
      <View>
        {drinkList.map((drink, i) => {
          return (
            <Drink key={i} drink={drink} addToFavorites={addToFavorites} />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Drinks;
