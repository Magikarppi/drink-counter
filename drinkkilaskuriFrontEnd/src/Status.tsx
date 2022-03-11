import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from './themes';
import { StatusProps } from './types';

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

const iconSize = 20;

const Status = ({ drinkList, drinkLimit, totalBloodAlc }: StatusProps) => {
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
            <MaterialIcons
              name="no-drinks"
              size={iconSize}
              color={colors.beige}
            />
          ) : (
            <Entypo name="drink" size={iconSize} color={colors.beige} />
          )}
        </View>
        {totalBloodAlc >= 0 ? (
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{`= ${totalBloodAlc.toFixed(2)}`}</Text>
            <Text style={styles.text}>{'% '}</Text>
            <Ionicon name="body-outline" size={iconSize} color={colors.beige} />
          </View>
        ) : null}
        <View style={styles.iconWrapper}>
          {totalBloodAlc >= 0.5 ? (
            <MaterialCommunityIcon name="car-off" size={25} color={'#ff401f'} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Status;
