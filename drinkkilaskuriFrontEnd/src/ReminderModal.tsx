import React from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import CloseButton from './Buttons/CloseButton';
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '60%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    overflow: 'hidden',
  },
  mainTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.beige,
    width: 70,
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  buttonElement: {
    width: '33%',
  },
  mainText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.violet,
  },
});

const ReminderModal = ({ showModal, closeModal }: ReminderModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.filler} />
        <View style={styles.elementsContainer}>
          <View style={styles.mainTextWrapper}>
            <Text style={styles.mainText}>
              Olet ylittämässä drinkkirajasi. Haluatko silti lisätä drinkin?
            </Text>
          </View>
          <TouchableOpacity onPress={closeModal}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Ok</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ReminderModal;
