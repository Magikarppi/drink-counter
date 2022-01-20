import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import CloseButton from "../Buttons/CloseButton";
import Settings from './Settings';
import { SettingsModalProps } from "../types";
import { colors } from "../themes";
import MainHeader from "../HeaderMain";
import SaveButton from "../Buttons/SaveButton";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
    // backgroundColor: colors.backgroundDark,
    // height: '100%',
  },
  y: {
    height: '10%'
  },
  x: {
    width: '90%',
    height: '80%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  buttonElement: {
    width: '33%'
  }
});

const SettingsModal = ({
  showModal,
  closeModal,
  saveSettings,
  sleepTime,
  changeSleepTime
}: SettingsModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.y} />
        <View style={styles.x}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonElement}>
              <CloseButton closeModal={closeModal} />
            </View>
            <View>
              <SaveButton saveSettings={saveSettings} />
            </View>
            <View style={styles.buttonElement} />
          </View>
          <Settings sleepTime={sleepTime} changeSleepTime={changeSleepTime} />
        </View>
      </View>
    </Modal>
  );

};

export default SettingsModal;