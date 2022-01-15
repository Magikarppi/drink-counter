import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import CloseButton from './Buttons/CloseButton';
import Favorites from './Favorites';
import { colors } from './themes';
import { FavoritesModalProps } from './types';

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
    height: '50%',
    backgroundColor: colors.backgroundDark,
    borderColor: colors.beige,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    overflow: 'hidden'

  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonElement: {
    width: '33%'
  }
});

const drinkList = new Array(10).fill({name: "IPA", alc: 4.7, amount: 0.33});

const FavoritesModal = ({closeModal, showModal, addDrink}: FavoritesModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.y} />
        <View style={styles.x}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonElement}>
              <CloseButton closeModal={closeModal} />
            </View>
          </View>
          <Favorites favoriteDrinks={drinkList} addDrink={addDrink}/>
        </View>
      </View>
    </Modal>
  );
};

export default FavoritesModal;