import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from './themes';
import { GoalsProps } from './types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
    height: '100%',
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.beige,
  },
});

const Goals = ({ drinkList, drinkLimit }: GoalsProps) => {
  const [noMoreDrinks, setNoMoreDrinks] = useState<boolean>(false);
  useEffect(() => {
    if (drinkList && drinkLimit) {
      const noMore = parseInt(drinkLimit, 10) - drinkList?.length;
      if (noMore < 1) {
        setNoMoreDrinks(true);
      }
    }
  }, [drinkLimit, drinkList]);

  if (!drinkLimit) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text
          style={styles.text}
        >{`${drinkList?.length} / ${drinkLimit}`}</Text>
      </View>
      {noMoreDrinks ? (
        <MaterialIcons name="no-drinks" size={20} color={colors.beige} />
      ) : (
        <Entypo name="drink" size={20} color={colors.beige} />
      )}
    </View>
  );
};

export default Goals;
