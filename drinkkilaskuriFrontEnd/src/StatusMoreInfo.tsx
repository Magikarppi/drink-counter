import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './themes';
import { StatusMoreInfoProps } from './types';
import { calculateWhenSober } from './utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soberText: {
    color: colors.beige,
    fontSize: 20,
  },
});

const StatusMoreInfo = ({ totalBac }: StatusMoreInfoProps) => {
  const whenSoberInH = calculateWhenSober(totalBac).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.soberText}>
        Olet taas selvänä n. {whenSoberInH} tunnin kuluttua.
      </Text>
    </View>
  );
};

export default StatusMoreInfo;
