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
    marginHorizontal: 2,
  },
  currValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.beige,
  },
  goalValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.beige,
  },
});

const iconSize = 20;
type LimitReached = 'BAC' | 'drink-count';
const Status = ({ drinkList, drinkLimit, totalBAC, bacLimit }: StatusProps) => {
  const [limitReached, setLimitReached] = useState<LimitReached | null>(null);
  const [underlineDrinkCount, setUnderLineDrinkCount] =
    useState<boolean>(false);
  const [underlineBAC, setUnderLineBAC] = useState<boolean>(false);

  useEffect(() => {
    if (drinkList && drinkLimit) {
      // check if no-more-drinks should be consumed
      const status = parseInt(drinkLimit, 10) - drinkList?.length;
      console.log('status ', status);
      if (status < 1) {
        console.log('setlimitreached drinkcount');
        return setLimitReached('drink-count');
      } else {
        return setLimitReached(null);
      }
    }
    // Reset to default (null) if for example drinklimit gets removed
    setLimitReached(null);
  }, [drinkLimit, drinkList]);

  useEffect(() => {
    if (totalBAC && bacLimit) {
      // check if no-more-drinks should be consumed
      const status = parseFloat(bacLimit) - totalBAC;
      if (status <= 0) {
        return setLimitReached('BAC');
      } else {
        return setLimitReached(null);
      }
    }
    // Reset to default (null) if for example bacLimit gets removed
    setLimitReached(null);
  }, [totalBAC, bacLimit]);

  useEffect(() => {
    switch (limitReached) {
      case 'BAC':
        setUnderLineBAC(true);
        break;
      case 'drink-count':
        setUnderLineDrinkCount(true);
        break;
      default:
        setUnderLineBAC(false);
        setUnderLineDrinkCount(false);
        break;
    }
  }, [limitReached]);

  if (!drinkLimit && !totalBAC) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text
            style={
              underlineDrinkCount
                ? {
                    ...styles.currValueText,
                    borderBottomColor: colors.danger,
                    borderBottomWidth: 1,
                  }
                : styles.currValueText
            }
          >{`${drinkList ? drinkList?.length : '0'} ${
            drinkLimit ? '/ ' + drinkLimit : ''
          }`}</Text>
        </View>
        {limitReached ? (
          <MaterialIcons
            name="no-drinks"
            size={iconSize}
            color={colors.danger}
          />
        ) : (
          <Entypo name="drink" size={iconSize} color={'#9ef542'} />
        )}
        {totalBAC >= 0 ? (
          <View style={styles.textWrapper}>
            <Text style={styles.currValueText}>= </Text>
            <Text
              style={
                underlineBAC
                  ? {
                      ...styles.goalValueText,
                      borderBottomColor: colors.danger,
                      borderBottomWidth: 1,
                    }
                  : styles.goalValueText
              }
            >{`${totalBAC.toFixed(2)}`}</Text>
            <Text
              style={
                underlineBAC
                  ? {
                      ...styles.goalValueText,
                      borderBottomColor: colors.danger,
                      borderBottomWidth: 1,
                    }
                  : styles.goalValueText
              }
            >
              {bacLimit ? ' / ' + bacLimit : ''}
            </Text>
            <Text style={{ ...styles.currValueText, color: colors.beige }}>
              {' %'}
            </Text>
            <Ionicon name="body-outline" size={iconSize} color={colors.beige} />
          </View>
        ) : null}
        {totalBAC >= 0.5 ? (
          <MaterialCommunityIcon
            name="car-off"
            size={25}
            color={colors.danger}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Status;
