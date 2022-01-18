import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { colors } from '../themes';

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
    fontSize: 18,
    color: colors.white,
  },
});

const SleepTime = () => {
  const [sleepTime, setSleepTime] = useState<string>();
  // kirjasto jossa pyöritettävä kello?

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Mihin aikaan olet mennyt viime aikoina nukkumaan?</Text>
        <DateTimePicker value={new Date()} onChange={(event, date) => setSleepTime(event)} mode="time" minuteInterval={30} />

      </View>
    </View>
  )
};

export default SleepTime;