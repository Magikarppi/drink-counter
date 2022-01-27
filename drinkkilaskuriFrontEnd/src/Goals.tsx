import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './themes';
import { GoalsProps } from './types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
  if (!drinkLimit) {
    return null;
  }
  // lisää drinkkikuva
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text
          style={styles.text}
        >{`${drinkList?.length} / ${drinkLimit}`}</Text>
      </View>
    </View>
  );
};

export default Goals;
