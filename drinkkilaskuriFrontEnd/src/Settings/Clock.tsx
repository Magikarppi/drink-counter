import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { ClockProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    margin: 5,
  },
});

const Clock = ({ showClock, changeSleepTime, sleepTime }: ClockProps) => {
  const handleTimeSet = (_event: any, date: any) => {
    changeSleepTime(date);
  };

  if (!showClock) {
    return null;
  }

  const sleepTimeVal = sleepTime === undefined ? new Date() : sleepTime;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <DateTimePicker
          value={sleepTimeVal}
          onChange={handleTimeSet}
          mode="time"
          is24Hour={true}
          minuteInterval={30}
        />
      </View>
    </View>
  );
};

export default Clock;
