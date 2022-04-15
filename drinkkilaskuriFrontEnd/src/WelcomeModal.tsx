import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import CheckBox from './Buttons/CheckBox';
import { colors } from './themes';
import { WelcomeModalProps } from './types';

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
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    // backgroundColor: 'gray',
  },
  checkBoxElementsWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    fontSize: 10,
    color: colors.beige,
  },
});

const WelcomeModal = ({
  showModal,
  selectSex,
  selectedSex,
}: WelcomeModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.screenContainer}>
        <View style={styles.ghostElement} />
        <View style={styles.modalContainer}>
          <Text>Hoi</Text>
          <View style={styles.checkBoxContainer}>
            <View style={styles.checkBoxElementsWrapper}>
              <Text style={styles.checkBoxText}>Mies</Text>
              <CheckBox
                handlePress={() => selectSex('male')}
                selected={selectedSex === 'male'}
              />
            </View>
            <View style={styles.checkBoxElementsWrapper}>
              <Text style={styles.checkBoxText}>Nainen</Text>
              <CheckBox
                handlePress={() => selectSex('female')}
                selected={selectedSex === 'female'}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WelcomeModal;
