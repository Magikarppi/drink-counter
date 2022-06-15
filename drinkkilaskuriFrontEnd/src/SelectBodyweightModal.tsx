import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import BodySize from './Settings/BodySize';
import { colors } from './themes';
import { SelectBodyweightModalProps } from './types';

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
    height: '40%',
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
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.white,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.backgroundDark,
  },
  welcomeText: {
    fontSize: 35,
    color: colors.violet,
  },
  infoText: {
    fontSize: 25,
    color: colors.beige,
  },
});

const SelectBodyweight = ({
  showModal,
  closeModal,
  setBodyweight,
  bodyweight,
}: SelectBodyweightModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.filler} />
        <View style={styles.elementsContainer}>
          <Text style={styles.welcomeText}>Tervetuloa!</Text>
          <BodySize bodyweight={bodyweight} setBodyweight={setBodyweight} />
          <TouchableOpacity onPress={() => closeModal()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Ok</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SelectBodyweight;
