import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, } from 'react-native';
import CheckBox from '../Buttons/CheckBox';
import { colors } from '../themes';
import { ReminderProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // marginHorizontal: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  mainInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    margin: 5,
    backgroundColor: colors.violet,
    borderColor: 'black',
    borderBottomColor: colors.violet,
    borderWidth: 2,
  },
  secondaryInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: colors.violet,
    borderColor: 'black',
    borderBottomColor: colors.violet,
    borderWidth: 2,
  },
  checkBoxElementsWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainInputText: {
    fontSize: 18,
    color: colors.white,
  },
  secondaryInputText: {
    fontSize: 15,
    color: colors.white,
  },
  checkBoxText: {
    fontSize: 10,
    color: colors.beige
  }
});

const Reminder = ({ selectRemindInterval, selectedRemindInterval }: ReminderProps) => {
  const [reminder, setReminder] = useState<string>();

  return (
    //tarviiko containeria?
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainInputText}>Muistutus itsellesi</Text>
        <TextInput
          style={styles.mainInput}
          onChangeText={setReminder}
          value={reminder}
          placeholder="Oisko sittenkin vettä tähän väliin?"
          keyboardType="default"
          placeholderTextColor={'#d9d9d9'}
          textAlign='center'
        />
        <Text style={styles.secondaryInputText}>Muistuta minua:</Text>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxElementsWrapper}>
            <Text style={styles.checkBoxText}>Ennen jokaista juomaa</Text>
            <CheckBox handlePress={() => selectRemindInterval('afterMax')} selected={selectedRemindInterval === 'afterMax'} />
          </View>
          <View style={styles.checkBoxElementsWrapper}>
          <Text style={styles.checkBoxText}>Maxidrinkin jälkeen</Text>
            <CheckBox handlePress={() => selectRemindInterval('afterEvery')} selected={selectedRemindInterval === 'afterEvery'} />
          </View>
        </View>
      </View>
    </View>
  )
};

export default Reminder;