import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../themes';
import { SettingsProps } from '../types';
import BACInfoModal from './BACInfoModal';
import BACLimit from './BACLimit';
import DrinkCountLimit from './DrinkCountLimit';
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
  setDrinkCountLimit,
  drinkCountLimit,
  reminderMessage,
  setReminderMessage,
  useSleepTime,
  toggleUseSleepTime,
  bacLimit,
  setBACLimit,
}: SettingsProps) => {
  const [showBACInfo, setShowBACInfo] = useState<boolean>(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <BACInfoModal
          showModal={showBACInfo}
          closeModal={() => setShowBACInfo(false)}
        />
        <View style={styles.section}>
          <DrinkCountLimit
            drinkCountLimit={drinkCountLimit}
            setDrinkCountLimit={setDrinkCountLimit}
          />
          <BACLimit bacLimit={bacLimit} setBACLimit={setBACLimit} />
          <TouchableOpacity onPress={() => setShowBACInfo(true)}>
            <View
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicon
                name="information-circle-outline"
                size={25}
                color={colors.brown}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Reminder
            selectRemindInterval={selectRemindInterval}
            selectedRemindInterval={selectedRemindInterval}
            reminderMessage={reminderMessage}
            setReminderMessage={setReminderMessage}
          />
        </View>
        <SleepTime
          sleepTime={sleepTime}
          changeSleepTime={changeSleepTime}
          useSleepTime={useSleepTime}
          toggleUseSleepTime={toggleUseSleepTime}
        />
      </View>
    </ScrollView>
  );
};

export default Settings;
