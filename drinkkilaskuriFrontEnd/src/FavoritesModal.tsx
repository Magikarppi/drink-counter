import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
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
  filler: {
    height: '10%',
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

const FavoritesModal = ({
  closeModal,
  showModal,
  addDrink,
  favorites,
  removeFavorite,
}: FavoritesModalProps) => {
  return (
    <Modal visible={showModal} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.filler} />
        <View style={styles.elementsContainer}>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonElement}>
              <CloseButton closeModal={closeModal} />
            </View>
            <View style={styles.buttonElement}>
              <Text style={styles.titleText}>Suosikit</Text>
            </View>
            <View style={styles.buttonElement} />
          </View>
          <Favorites
            favorites={favorites}
            addDrink={addDrink}
            removeFavorite={removeFavorite}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FavoritesModal;
