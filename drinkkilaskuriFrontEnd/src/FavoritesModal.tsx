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
    padding: 5,
    overflow: 'hidden',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
  },
  buttonElement: {
    width: '33%',
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
