import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import CheckBox from '../Buttons/CheckBox';
import { colors } from '../themes';
import { ReminderSettingProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'space-evenly',
    width: '80%',
    // backgroundColor: 'gray',
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
    color: colors.beige,
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
    alignItems: 'center',
  },
  mainInputText: {
    fontSize: 18,
    color: colors.beige,
  },
  secondaryInputText: {
    fontSize: 15,
    color: colors.beige,
  },
  checkBoxText: {
    fontSize: 10,
    color: colors.beige,
  },
});

const ReminderSetting = ({
  selectRemindInterval,
  selectedRemindInterval,
  setReminderMessage,
  reminderMessage,
}: ReminderSettingProps) => {
  return (
    //tarviiko containeria?
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.mainInputText}>Muistutus itsellesi</Text>
        <View style={{ width: 250 }}>
          <TextInput
            style={styles.mainInput}
            onChangeText={setReminderMessage}
            value={reminderMessage}
            placeholder="Oisko sittenkin vett?? t??h??n v??liin?"
            keyboardType="default"
            placeholderTextColor={'grey'}
            textAlign="center"
            maxLength={100}
          />
        </View>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxElementsWrapper}>
            <Text style={styles.checkBoxText}>Aina</Text>
            <CheckBox
              handlePress={() => selectRemindInterval('always')}
              selected={selectedRemindInterval === 'always'}
            />
          </View>
          <View style={styles.checkBoxElementsWrapper}>
            <Text style={styles.checkBoxText}>Rajojen ylittyess??</Text>
            <CheckBox
              handlePress={() => selectRemindInterval('afterMax')}
              selected={selectedRemindInterval === 'afterMax'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReminderSetting;
