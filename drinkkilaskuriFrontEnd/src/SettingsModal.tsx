import React from "react";
import { Modal, Settings, StyleSheet, Text, View } from "react-native";
import CloseButton from "./CloseButton";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'yellow',
    height: '100%',
  },
});

type MenuModalsProps = {
  modalToOpen: 'settings' | 'FAQ' | 'contact' | undefined;
  showModal: boolean;
  closeModal: () => void;
};

const MenuModals = ({
  modalToOpen,
  showModal,
  closeModal,
}: MenuModalsProps) => {
  switch (modalToOpen) {
    case 'settings':
      return (
        <Modal visible={showModal} animationType="slide">
          <View style={styles.modalContainer}>
            <CloseButton handleClose={closeModal} />
            <Settings />
          </View>
        </Modal>
      );
    case 'FAQ':
      return (
        <Modal visible={showModal} animationType="slide">
          <View style={styles.modalContainer}>
            <CloseButton handleClose={closeModal} />
            <Text>FAQ Modaali</Text>
          </View>
        </Modal>
      );

    default:
      return null;
  }
};

export default MenuModals;