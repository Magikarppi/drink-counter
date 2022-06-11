import React from 'react';
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
    width: '80%',
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

const Status = ({
  drinkList,
  drinkCountLimit,
  totalBAC,
  bacLimit,
  drinkCountLimitReached,
  bacLimitReached,
}: StatusProps) => {
  if (!drinkCountLimit && !bacLimit && !totalBAC) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.textWrapper}>
          <Text
            style={
              drinkCountLimitReached
                ? {
                    ...styles.currValueText,
                    borderBottomColor: colors.danger,
                    borderBottomWidth: 1,
                  }
                : styles.currValueText
            }
          >{`${drinkList ? drinkList?.length : '0'} ${
            drinkCountLimit ? '/ ' + drinkCountLimit : ''
          }`}</Text>
        </View>
        {drinkCountLimitReached || bacLimitReached ? (
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
            <Text style={styles.currValueText}> = </Text>
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
              {`${(totalBAC * 10).toFixed(2)}`}
              <Text
                style={{
                  ...styles.currValueText,
                  color: colors.beige,
                  fontSize: 15,
                }}
              >
                {'‰'}
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
              {bacLimit ? ` / ${bacLimit}` : ''}
              {bacLimit ? (
                <Text
                  style={{
                    ...styles.currValueText,
                    color: colors.beige,
                    fontSize: 15,
                  }}
                >
                  {'‰'}
                </Text>
              ) : (
                ''
              )}
            </Text>
            <Ionicon name="body-outline" size={iconSize} color={colors.beige} />
          </View>
        ) : null}
        {totalBAC >= 0.05 ? (
          <View style={styles.iconWrapper}>
            <MaterialCommunityIcon
              name="car-off"
              size={25}
              color={colors.danger}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Status;
