import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../themes';
import { SettingsProps } from '../types';
import BACInfoModal from './BACInfoModal';
import BACLimit from './BACLimit';
import BodySize from './BodySize';
import DrinkLimit from './DrinkLimit';
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
  setDrinkLimit,
  drinkLimit,
  bodyweight,
  setBodyweight,
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
          <DrinkLimit drinkLimit={drinkLimit} setDrinkLimit={setDrinkLimit} />
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
        <View style={styles.section}>
          <BodySize bodyweight={bodyweight} setBodyweight={setBodyweight} />
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
