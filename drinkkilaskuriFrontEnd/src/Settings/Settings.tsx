
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { colors } from '../themes';
import { SettingsProps } from '../types';
import BodySize from './BodySize';
import MaxDrinkCount from './MaxDrinkCount';
import Reminder from './ReminderSetting';
import SleepTime from './SleepTime';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
  section: {
    borderBottomColor: colors.violet,
    borderBottomWidth: 1,
    padding: 5
  }
});

const Settings = ({ changeSleepTime, sleepTime, selectRemindInterval, selectedRemindInterval, handleSetMaxDrinkCount, maxDrinkCount }: SettingsProps) => {
  const [showClock, setShowClock] = useState<boolean>(false);

  const toggleTimePicker = () => {
    return setShowClock((prev) => !prev)
  }

  const sleepTimeChangePitStop = (time: Date) => {
    changeSleepTime(time);
    toggleTimePicker();
    return;
  }

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.section}>
          <MaxDrinkCount maxDrinkCount={maxDrinkCount} handleSetMaxDrinkCount={handleSetMaxDrinkCount} />
        </View>
        <View style={styles.section}>
          <Reminder selectRemindInterval={selectRemindInterval} selectedRemindInterval={selectedRemindInterval} />
        </View>
        <View style={styles.section}>
          <BodySize />
        </View>
        <SleepTime showClock={showClock} toggleTimePicker={toggleTimePicker} sleepTime={sleepTime} changeSleepTime={sleepTimeChangePitStop} />
        <View style={{ height: 50 }}>
          <Button title='Aseta nuk. men. aik.' onPress={toggleTimePicker} />
        </View>
      </View>
    </ScrollView>
  )
};

export default Settings;