import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { colors } from '../themes';
import { SleepTimeProps } from '../types';

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
    margin: 5
  },
  inputText: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center'
  },
});

const SleepTime = ({ showClock, toggleTimePicker, changeSleepTime, sleepTime }: SleepTimeProps) => {

  const handleTimeSet = (_event: any, date: any) => {
    console.log('date', typeof (date));
    // changeSleepTime(date);
    changeSleepTime(date)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {
          showClock && (
            <View>
              <DateTimePicker value={sleepTime} onChange={handleTimeSet} mode="time" is24Hour={true} minuteInterval={30} />
            </View>
          )
        }
      </View>
    </View>
  )
};

export default SleepTime;