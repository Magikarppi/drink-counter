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

const Reminder = () => {
  const [reminder, setReminder] = useState<string>();

  return (
    //tarviiko containeria?
  <View style={styles.container}>
    <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Muistutus itsellesi</Text>
        <TextInput
          style={styles.input}
          onChangeText={setReminder}
          value={reminder}
          placeholder="Oisko sittenkin vettä tähän väliin?"
          keyboardType="default"
        />
      </View>
  </View>
  )
};

export default Reminder;