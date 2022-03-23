import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import CloseButton from '../Buttons/CloseButton';
import Settings from './Settings';
import { SettingsModalProps } from '../types';
import { colors } from '../themes';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
    // backgroundColor: colors.backgroundDark,
    // height: '100%',
  },
  ghostElement: {
    height: '10%',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  buttonElement: {
    // justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '33%',
  },
});

const SettingsModal = ({
  showModal,
  closeModal,
  sleepTime,
  changeSleepTime,
  selectRemindInterval,
  selectedRemindInterval,
  setDrinkLimit,
  drinkLimit,
  bodyweight,
  setBodyweight,
  reminderMessage,
  setReminderMessage,
  toggleUseSleepTime,
  useSleepTime,
  bacLimit,
  setBACLimit,
}: SettingsModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.screenContainer}>
        <View style={styles.ghostElement} />
        <View style={styles.modalContainer}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonElement}>
              <CloseButton closeModal={closeModal} />
            </View>
            <View style={styles.buttonElement}>
              {/* <SaveButton saveSettings={saveSettings} /> */}
            </View>
            <View style={styles.buttonElement} />
          </View>
          <Settings
            bodyweight={bodyweight}
            setBodyweight={setBodyweight}
            drinkLimit={drinkLimit}
            setDrinkLimit={setDrinkLimit}
            bacLimit={bacLimit}
            setBACLimit={setBACLimit}
            sleepTime={sleepTime}
            changeSleepTime={changeSleepTime}
            selectRemindInterval={selectRemindInterval}
            selectedRemindInterval={selectedRemindInterval}
            reminderMessage={reminderMessage}
            setReminderMessage={setReminderMessage}
            toggleUseSleepTime={toggleUseSleepTime}
            useSleepTime={useSleepTime}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;
