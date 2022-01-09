
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
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

const Settings = () => {
  return (
  <ScrollView >
    <View style={styles.container}>
      <MaxDrinkCount />
      <Reminder />
      <SleepTime />
      <BodySize />
      <View style={{height: 50}}>
        <Text>Haa</Text>
      </View>
      <View style={{height: 50}}>
        <Text>Haa</Text>
      </View>
      <View style={{height: 50}}>
        <Text>Haa</Text>
      </View>
      <View style={{height: 50}}>
        <Text>Haa</Text>
      </View>
      <View style={{height: 50}}>
        <Text>Haa</Text>
      </View>
    </View>
  </ScrollView>
  )
};

export default Settings;