import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import CloseButton from '../Buttons/CloseButton';
import { colors } from '../themes';
import { BACInfoModalProps } from '../types';
import BACInfo from './BACInfo';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalContainer: {
    width: '90%',
    height: '40%',
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
    alignItems: 'center',
    width: '33%',
  },
});

const BACInfoModal = ({ showModal, closeModal }: BACInfoModalProps) => {
  console.log('showModal: ', showModal);
  return (
    <Modal visible={showModal}>
      <View style={styles.screenContainer}>
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
          <BACInfo />
        </View>
      </View>
    </Modal>
  );
};

export default BACInfoModal;
