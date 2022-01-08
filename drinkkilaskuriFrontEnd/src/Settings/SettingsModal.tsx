import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import CloseButton from "../Buttons/CloseButton";
import Settings from './Settings';
import { SettingsModalProps } from "../types";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'yellow',
    height: '100%',
  },
});

const SettingsModal = ({
  showModal,
  closeModal,
}: SettingsModalProps) => {
      return (
        <Modal visible={showModal} animationType="slide">
          <View style={styles.modalContainer}>
            <CloseButton closeModal={closeModal} />
            <Settings />
          </View>
        </Modal>
      );

};

export default SettingsModal;