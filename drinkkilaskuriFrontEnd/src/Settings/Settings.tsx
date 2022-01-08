
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodySize from './BodySize';
import MaxDrinkCount from './MaxDrinkCount';
import Reminder from './ReminderSetting';
import SleepTime from './SleepTime';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: '90%',
    height: '100%'
  }
});

const Settings = () => {
  return (
  <View style={styles.container}>
    <MaxDrinkCount />
    <Reminder />
    <SleepTime />
    <BodySize />
  </View>
  )
};

export default Settings;