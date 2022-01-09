import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
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

    // marginHorizontal: 20,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
    margin: 5,
    backgroundColor: colors.violet,
    borderColor: 'black',
    borderBottomColor: colors.violet,
    borderWidth: 2,
  },
  inputText: {
    fontSize: 18,
    color: colors.white,
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
          placeholderTextColor={'#d9d9d9'}
          textAlign='center'
        />
      </View>
  </View>
  )
};

export default Reminder;