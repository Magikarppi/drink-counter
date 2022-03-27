import React, { useEffect, useState } from 'react';
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

const youAreSober = 'Olet kuluttanut kaiken alkoholin verestäsi';

const StatusMoreInfo = ({ totalBac }: StatusMoreInfoProps) => {
  const [soberingText, setSoberingText] = useState<string>(youAreSober);

  useEffect(() => {
    const whenSober = calculateWhenSober(totalBac).toFixed(2);

    // Turn into 60min format
    const indexOfDot = whenSober.indexOf('.');
    const whenSoberHours = parseInt(whenSober.slice(0, indexOfDot), 10);
    const whenSoberMinutes = Math.round(
      parseInt(whenSober.slice(indexOfDot + 1), 10) * 0.6
    );
    const notSoberText = ` ${
      whenSoberHours > 0 ? whenSoberHours + ' t' : ''
    } ${whenSoberMinutes} min \n `;

    if (parseInt(whenSober, 10) <= 0) {
      // if sober set the sober text
      setSoberingText(youAreSober);
    } else {
      // if not-sober set the not-sober text
      setSoberingText(notSoberText);
    }
  }, [totalBac]);

  return (
    <View style={styles.container}>
      <Text style={styles.soberText}>
        Olet taas selvänä {'\n'} n.
        <Text style={styles.soberHourText}>{soberingText}</Text>
        kuluttua.
      </Text>
    </View>
  );
};

export default StatusMoreInfo;
