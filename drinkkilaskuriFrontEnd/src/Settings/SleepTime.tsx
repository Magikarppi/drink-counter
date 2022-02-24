import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '../Buttons/CheckBox';
import { colors } from '../themes';
import { SleepTimeProps } from '../types';
import Clock from './Clock';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.violet,
    borderBottomWidth: 1,
    padding: 5,
    width: '90%',
  },
  checkBoxElementsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 80,
  },
  sleepTimeInfo: {
    fontSize: 12,
    color: colors.beige,
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 40,
    marginVertical: 5,
    backgroundColor: colors.violet,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.beige,
    fontSize: 15,
  },
  checkBoxText: {
    fontSize: 10,
    color: colors.beige,
  },
});

const SleepTime = ({
  sleepTime,
  changeSleepTime,
  useSleepTime,
  toggleUseSleepTime,
}: SleepTimeProps) => {
  const [showClock, setShowClock] = useState<boolean>(false);

  const openClock = () => {
    return setShowClock(true);
  };

  const sleepTimeChangePitStop = (time: Date) => {
    changeSleepTime(time);
    // toggleTimePicker();
    setShowClock(false);
    return;
  };
  return (
    <>
      <Clock
        showClock={showClock}
        sleepTime={sleepTime}
        changeSleepTime={sleepTimeChangePitStop}
      />
      <View style={styles.section}>
        <TouchableOpacity onPress={openClock}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Aseta</Text>
            <MaterialCommunityIcons
              name="sleep"
              size={30}
              color={colors.beige}
            />
            <Text style={styles.buttonText}>aika</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.checkBoxElementsWrapper}>
          <Text style={styles.checkBoxText}>Käytössä</Text>
          <CheckBox handlePress={toggleUseSleepTime} selected={useSleepTime} />
        </View>
        <Text style={styles.sleepTimeInfo}>
          Asettamalla keskimääräisen nukkumaanmenoaikasi viimeisiltä muutamalta
          päivältä, luo sinulle suosituksen juomisen lopettamisesta myös
          kellonajan perusteella, jotta alkoholin vaikutusta unirytmiisi
          voitaisi minimoida.
        </Text>
      </View>
    </>
  );
};

export default SleepTime;
