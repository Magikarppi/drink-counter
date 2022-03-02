import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, { Circle } from 'react-native-svg';

import { colors } from './themes';
import { DrinkProps } from './types';
import { calculateBAC } from './utils';

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
    color: colors.beige,
    textAlign: 'center',
  },
});

const Drink = ({
  drink,
  addToFavorites,
  removeDrink,
  removeFavorite,
}: DrinkProps) => {
  const [initialDrinkBAC, setInitialDrinkBAC] = useState<number>();
  const [consumedSvgValue, setConsumedSvgValue] = useState<number>();

  useEffect(() => {
    setInitialDrinkBAC(calculateBAC(drink));
  }, [drink]);

  useEffect(() => {
    setConsumedSvgValue(125);
  }, []);

  // Calculate and update drink's blood alcohol content every minute
  useEffect(() => {
    if (!initialDrinkBAC) {
      return;
    }

    const getConsumedValueForSvg = (bac: number) => {
      // 125 = 100% juomasta poltettu
      // 63 ~= 50%
      // ...
      // 0 = 0% juomasta poltettu
      // => kerroin 1.25
      const multiplier = 125 / initialDrinkBAC; // yx = 125 |||| e.g with 0.44 drinkBAC => 0.44x = 125 => x = 125 / 0.44
      const consumedValue = multiplier * bac;
      return consumedValue;
    };

    const interval = setInterval(() => {
      if (drink) {
        const bac = calculateBAC(drink);

        const value = getConsumedValueForSvg(bac);
        setConsumedSvgValue(value);
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [drink, initialDrinkBAC]);

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
        <Text style={styles.text}>{`${drink.alcPercent}%`}</Text>
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        <Text style={styles.text}>{`${drink.amount}L`}</Text>
      </View>
      <View
        style={{
          ...styles.property,
          flex: 2,
          height: '100%',
        }}
      >
        {consumedSvgValue ? (
          <Svg height={20} width={20} viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="40" fill={colors.backgroundDark} />
            <Circle
              origin="50, 50"
              rotation="50"
              cx="50"
              cy="50"
              r="20"
              stroke={colors.beige}
              strokeWidth="40"
              fill="none"
              strokeDasharray={`${consumedSvgValue}, 160`}
            />
          </Svg>
        ) : null}
      </View>
      <View style={{ ...styles.property, flex: 2 }}>
        {drink.favorited ? (
          <TouchableOpacity onPress={() => removeFavorite(drink)}>
            <Ionicons name="star-sharp" size={30} color={colors.beige} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => addToFavorites(drink)}>
            <Ionicons name="star-outline" size={30} color={colors.beige} />
          </TouchableOpacity>
        )}
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
