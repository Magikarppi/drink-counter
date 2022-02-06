import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes';
import { CloseButtonProps } from '../types';

const styles = StyleSheet.create({
  closeContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CloseButton = ({ closeModal }: CloseButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.closeContainer}>
        <Ionicons name="ios-close-outline" size={50} color={colors.beige} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;
