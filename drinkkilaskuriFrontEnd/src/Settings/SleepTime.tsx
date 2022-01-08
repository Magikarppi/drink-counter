import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

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
  },
  inputText: {
    fontSize: 18,
    color: 'black',
  },
});

const SleepTime = () => {
  const [sleepTime, setSleepTime] = useState<string>();
  // kirjasto jossa pyöritettävä kello?

  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Mihin aikaan olet mennyt viime aikoina nukkumaan?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setSleepTime}
          value={sleepTime}
          placeholder=""
          keyboardType="number-pad"
        />
      </View>
  </View>
  )
};

export default SleepTime;