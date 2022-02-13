import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../themes';
import { SettingsProps } from '../types';
import BodySize from './BodySize';
import MaxDrinkCount from './MaxDrinkCount';
import Reminder from './ReminderSetting';
import SleepTime from './SleepTime';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.violet,
    borderBottomWidth: 1,
    padding: 5,
    width: '90%',
  },
  sleepTimeInfo: {
    fontSize: 12,
    color: colors.beige,
    textAlign: 'center',
  },
  button: {
    width: 170,
    height: 40,
    marginVertical: 5,
    backgroundColor: colors.violet,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonText: {
    color: colors.beige,
    fontSize: 15,
  },
});

const Settings = ({
  changeSleepTime,
  sleepTime,
  selectRemindInterval,
  selectedRemindInterval,
  handleSetMaxDrinkCount,
  maxDrinkCount,
  bodyweight,
  setBodyweight,
  reminderMessage,
  setReminderMessage,
}: SettingsProps) => {
  const [showClock, setShowClock] = useState<boolean>(false);

  const toggleTimePicker = () => {
    return setShowClock((prev) => !prev);
  };

  const sleepTimeChangePitStop = (time: Date) => {
    changeSleepTime(time);
    toggleTimePicker();
    return;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <MaxDrinkCount
            maxDrinkCount={maxDrinkCount}
            handleSetMaxDrinkCount={handleSetMaxDrinkCount}
          />
        </View>
        <View style={styles.section}>
          <Reminder
            selectRemindInterval={selectRemindInterval}
            selectedRemindInterval={selectedRemindInterval}
            reminderMessage={reminderMessage}
            setReminderMessage={setReminderMessage}
          />
        </View>
        <View style={styles.section}>
          <BodySize bodyweight={bodyweight} setBodyweight={setBodyweight} />
        </View>
        <SleepTime
          showClock={showClock}
          toggleTimePicker={toggleTimePicker}
          sleepTime={sleepTime}
          changeSleepTime={sleepTimeChangePitStop}
        />
        <View style={styles.section}>
          <TouchableOpacity onPress={toggleTimePicker}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Aseta</Text>
              <MaterialCommunityIcons
                name="sleep"
                size={30}
                color={colors.beige}
              />
              <Text style={styles.buttonText}>aika</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.sleepTimeInfo}>
            Asettamalla keskimääräisen nukkumaanmenoaikasi viimeisiltä
            muutamalta päivältä, luo sinulle suosituksen juomisen lopettamisesta
            myös kellonajan perusteella, jotta alkoholin vaikutusta unirytmiisi
            voitaisi minimoida.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
