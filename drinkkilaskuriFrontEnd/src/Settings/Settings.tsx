
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import { SettingsProps } from '../types';
import BodySize from './BodySize';
import MaxDrinkCount from './MaxDrinkCount';
import Reminder from './ReminderSetting';
import SleepTime from './SleepTime';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  }
});

const Settings = ({ changeSleepTime }: SettingsProps) => {
  const [showClock, setShowClock] = useState<boolean>(false);

  const toggleTimePicker = () => {
    setShowClock((prev) => !prev)
  }

  return (
    <ScrollView >
      <View style={styles.container}>
        <MaxDrinkCount />
        <Reminder />
        <SleepTime showClock={showClock} toggleTimePicker={toggleTimePicker} changeSleepTime={changeSleepTime} />
        <BodySize />
        <View style={{ height: 50 }}>
          <Text>Haa</Text>
        </View>
        <View style={{ height: 50 }}>
          <Text>Haa</Text>
        </View>
        <View style={{ height: 50 }}>
          <Text>Haa</Text>
        </View>
        <View style={{ height: 50 }}>
          <Text>Haa</Text>
        </View>
        <View style={{ height: 50 }}>
          <Button title='Aseta nuk. men. aik.' onPress={toggleTimePicker} />
        </View>
      </View>
    </ScrollView>
  )
};

export default Settings;