import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { colors } from './themes';
import { GoalsProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 5,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.beige,
  },
});

const Goals = ({ drinkList, drinkLimit, totalBloodAlc }: GoalsProps) => {
  const [noMoreDrinks, setNoMoreDrinks] = useState<boolean>(false);
  useEffect(() => {
    if (drinkList && drinkLimit) {
      const noMore = parseInt(drinkLimit, 10) - drinkList?.length;
      if (noMore < 1) {
        setNoMoreDrinks(true);
      }
    }
  }, [drinkLimit, drinkList]);

  if (!drinkLimit && !totalBloodAlc) {
    return null;
  }

  console.log('drinklimit', drinkLimit);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{`${drinkList ? drinkList?.length : '0'} ${
            drinkLimit ? '/ ' + drinkLimit : ''
          }`}</Text>
        </View>
        <View style={styles.iconWrapper}>
          {noMoreDrinks ? (
            <MaterialIcons name="no-drinks" size={20} color={colors.beige} />
          ) : (
            <Entypo name="drink" size={20} color={colors.beige} />
          )}
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{`${
            totalBloodAlc ? '= ' + totalBloodAlc.toFixed(2) : '=' + null
          }`}</Text>
          <Text style={styles.text}>{'% '}</Text>
          <Ionicon name="body-outline" size={20} color={colors.beige} />
        </View>
      </View>
    </View>
  );
};

export default Goals;
