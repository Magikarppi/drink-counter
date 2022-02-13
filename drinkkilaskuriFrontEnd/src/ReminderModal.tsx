import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { colors } from './themes';
import { ReminderModalProps } from './types';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  filler: {},
  elementsContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    height: '30%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    overflow: 'hidden',
  },
  mainTextWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: '50%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '80%',
    height: 70,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.beige,
    width: 80,
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  buttonElement: {
    width: '33%',
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  reminderText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: colors.white,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.backgroundDark,
  },
});

const ReminderModal = ({
  showModal,
  reminderMessage,
  sleepTimeReminderMsg,
  closeModal,
  continueAdd,
  drinkLimitReached,
}: ReminderModalProps) => {
  const drinkLimitWarnTitle =
    'Olet ylittämässä drinkkirajasi. Haluatko silti lisätä drinkin?';
  const sleepTimeWarnTitle =
    'Olet vaarassa sekoittaa unirytmiäsi. Haluatko silti lisätä drinkin?';

  const showSleepTimeWarnTitle = () => {
    if (!drinkLimitReached && sleepTimeReminderMsg) {
      return true;
    } else {
      return false;
    }
  };

  const showSleepTimeWarnInfo = () => {
    if (!drinkLimitReached && sleepTimeReminderMsg) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.filler} />
        <View style={styles.elementsContainer}>
          <View style={styles.mainTextWrapper}>
            <Text style={styles.mainText}>
              {showSleepTimeWarnTitle()
                ? sleepTimeWarnTitle
                : drinkLimitWarnTitle}
            </Text>
            {!showSleepTimeWarnInfo() ? (
              <Text style={styles.reminderText}>{reminderMessage}</Text>
            ) : null}
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={closeModal}>
              <View style={{ ...styles.button, backgroundColor: '#7FFF00' }}>
                <Text style={styles.buttonText}>Peruuta</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={continueAdd}>
              <View style={{ ...styles.button, backgroundColor: '#c74a63' }}>
                <Text style={styles.buttonText}>Lisää</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ReminderModal;
