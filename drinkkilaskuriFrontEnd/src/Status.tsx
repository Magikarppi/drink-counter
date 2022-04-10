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

const Status = ({ drinkList, drinkLimit, totalBAC, bacLimit }: StatusProps) => {
  const [drinkCountLimit, setDrinkCountLimitReached] = useState<boolean>(false);
  const [bacLimitReached, setBACLimitReached] = useState<boolean>(false);

  useEffect(() => {
    if (drinkList && drinkLimit) {
      // check if no-more-drinks should be consumed
      const status = parseInt(drinkLimit, 10) - drinkList?.length;
      if (status < 1) {
        return setDrinkCountLimitReached(true);
      }
    }
    // Reset to default (false) if for example drinklimit gets removed
    setDrinkCountLimitReached(false);
  }, [drinkLimit, drinkList]);

  useEffect(() => {
    if (totalBAC && bacLimit) {
      // check if no-more-drinks should be consumed
      const status = parseFloat(bacLimit) - totalBAC;
      if (status <= 0) {
        return setBACLimitReached(true);
      }
    }
    // Reset to default (false) if for example bacLimit gets removed
    setBACLimitReached(false);
  }, [totalBAC, bacLimit]);

  if (!drinkLimit && !bacLimit && !totalBAC) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text
            style={
              drinkCountLimit
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
        {drinkCountLimit || bacLimitReached ? (
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
                bacLimitReached
                  ? {
                      ...styles.goalValueText,
                      borderBottomColor: colors.danger,
                      borderBottomWidth: 1,
                    }
                  : styles.goalValueText
              }
            >
              {`${totalBAC.toFixed(2)}`}
              <Text
                style={{
                  ...styles.currValueText,
                  color: colors.beige,
                  fontSize: 15,
                }}
              >
                {'%'}
              </Text>
            </Text>

            <Text
              style={
                bacLimitReached
                  ? {
                      ...styles.goalValueText,
                      borderBottomColor: colors.danger,
                      borderBottomWidth: 1,
                    }
                  : styles.goalValueText
              }
            >
              {bacLimit ? ' / ' + bacLimit : ''}
              <Text
                style={{
                  ...styles.currValueText,
                  color: colors.beige,
                  fontSize: 15,
                }}
              >
                {'%'}
              </Text>
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
