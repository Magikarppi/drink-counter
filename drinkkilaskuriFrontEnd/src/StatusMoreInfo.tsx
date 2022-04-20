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

const soberText = 'Olet kuluttanut kaiken alkoholin verestäsi';

const StatusMoreInfo = ({ totalBac }: StatusMoreInfoProps) => {
  const [showSoberText, setShowSoberText] = useState<boolean>(false);
  const [textToShow, setTextToShow] = useState<string>(soberText);

  useEffect(() => {
    const whenSober = calculateWhenSober(totalBac).toFixed(5);

    // Turn into 60min format
    const indexOfDot = whenSober.indexOf('.');
    const whenSoberHours = parseInt(whenSober.slice(0, indexOfDot), 10);
    const minsRaw = parseFloat(whenSober.slice(indexOfDot));
    const whenSoberMinutesDec = (minsRaw * 60).toString();
    const indexOfMinsDot = whenSoberMinutesDec.indexOf('.');
    const whenSoberMinutes = parseInt(
      whenSoberMinutesDec.slice(0, indexOfMinsDot),
      10
    );

    const notSoberText = ` ${
      whenSoberHours > 0 ? whenSoberHours + ' t' : ''
    } ${whenSoberMinutes} min \n `;

    const whenSoberFloat = parseFloat(whenSober);
    if (
      whenSoberFloat <= 0 ||
      (whenSoberHours === 0 && whenSoberMinutes === 0)
    ) {
      // if sober set the sober text
      setShowSoberText(true);
      setTextToShow(soberText);
    } else {
      // if not-sober set the not-sober text
      setShowSoberText(false);
      setTextToShow(notSoberText);
    }
  }, [totalBac]);

  return (
    <View style={styles.container}>
      {showSoberText ? (
        <Text style={styles.soberText}>{textToShow}</Text>
      ) : (
        <Text style={styles.soberText}>
          Olet taas selvänä {'\n'} n.
          <Text style={styles.soberHourText}>{textToShow}</Text>
          kuluttua.
        </Text>
      )}
    </View>
  );
};

export default StatusMoreInfo;
