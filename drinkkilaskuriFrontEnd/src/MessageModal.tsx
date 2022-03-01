import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import Message from './Message';
import { colors } from './themes';
import { MessageModalProps } from './types';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#00000080',
    // backgroundColor: colors.backgroundDark,
    // height: '100%',
  },
  filler: {
    height: '50%',
  },
  elementsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '60%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: '15%',
  },
  buttonElement: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  titleText: {
    fontSize: 20,
    color: colors.beige,
  },
});

const MessageModal = ({ showModal, message }: MessageModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.filler} />
        <Message message={message} />
      </View>
    </Modal>
  );
};

export default MessageModal;
