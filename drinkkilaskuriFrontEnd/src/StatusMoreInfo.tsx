import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './themes';
import { StatusMoreInfoProps } from './types';
import { calculateWhenSober } from './utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '5%',
  },
  soberText: {
    color: colors.beige,
    fontSize: 20,
    textAlign: 'center',
  },
  soberHourText: {
    color: colors.brown,
    fontSize: 30,
  },
});

const StatusMoreInfo = ({ totalBac }: StatusMoreInfoProps) => {
  const whenSoberInH = calculateWhenSober(totalBac).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.soberText}>
        Olet taas selvänä {'\n'} n.
        <Text style={styles.soberHourText}>{whenSoberInH}</Text> tunnin {'\n'}
        kuluttua.
      </Text>
    </View>
  );
};

export default StatusMoreInfo;
