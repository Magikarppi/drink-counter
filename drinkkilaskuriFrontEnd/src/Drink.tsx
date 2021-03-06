import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, { Circle } from 'react-native-svg';

import { colors } from './themes';
import { DrinkProps } from './types';
import { calculateBAC } from './utils';
import { UserContext } from './UserContext';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 55,
    // marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.violet,
  },
  property: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flameContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '70%',
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
  const [opacity, setOpacity] = useState<number>();

  const { bodyweight, sex } = useContext(UserContext);

  useEffect(() => {
    setInitialDrinkBAC(calculateBAC(drink, bodyweight, sex));
  }, [drink, bodyweight, sex]);

  // initialize state for consumption circle and opacity
  useEffect(() => {
    setConsumedSvgValue(0.1);
    setOpacity(1);
  }, []);

  // make the drink "faded out" if consumed
  useEffect(() => {
    if (consumedSvgValue && opacity) {
      if (consumedSvgValue >= 125) {
        console.log(drink.name);
        console.log('svg:', consumedSvgValue);
        setOpacity(0.6);
      }
    }
  }, [consumedSvgValue, opacity, drink.name]);

  // Calculate and update drink's blood alcohol content every minute
  useEffect(() => {
    if (initialDrinkBAC === undefined) {
      return;
    }

    console.log(drink.name + 'consumedSvgValue: ' + consumedSvgValue);
    if (consumedSvgValue) {
      if (consumedSvgValue >= 125) {
        return;
      }
    }

    // calculate value to match Svg circle requirements
    const getConsumedValueForSvg = (bac: number) => {
      if (initialDrinkBAC === 0) {
        return 125;
      }
      // 125 = 100% juomasta poltettu
      // 63 ~= 50%
      // ...
      // 0 = 0% juomasta poltettu
      // => kerroin 1.25
      // yx = 125 |||| e.g with 0.44 drinkBAC: 0.44x = 125 => x = 125 / 0.44
      // const multiplier = 125 / initialDrinkBAC;
      const consumedValue = drink.svgMultiplier * bac;
      // "reversed" so that the consumptions circle's "pie-burning" starts from 12 o'clock and continues clock wise
      const consumedValueReversed = 125 - consumedValue;
      return consumedValueReversed;
    };

    // calculate and update drink's BAC every second
    const interval = setInterval(() => {
      if (drink) {
        const bac = calculateBAC(drink, bodyweight, sex);
        const value = getConsumedValueForSvg(bac);
        setConsumedSvgValue(value);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [drink, initialDrinkBAC, consumedSvgValue, bodyweight, sex]);

  return (
    <View style={{ ...styles.container, opacity }}>
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
        <View
          style={{
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {consumedSvgValue ? (
            <Svg height={20} width={20} viewBox="0 0 100 100">
              <Circle cx="50" cy="50" r="40" fill={colors.beige} />
              <Circle
                origin="50, 50"
                rotation="270"
                cx="50"
                cy="50"
                r="20"
                stroke={colors.backgroundDark}
                strokeWidth="40"
                fill="none"
                strokeDasharray={`${consumedSvgValue}, 125`}
              />
            </Svg>
          ) : null}
          {consumedSvgValue !== 125 && (
            <Ionicons name="flame-outline" size={15} color={colors.brown} />
          )}
        </View>
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
