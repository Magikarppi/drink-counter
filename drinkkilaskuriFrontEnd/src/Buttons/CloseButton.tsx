import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  closeContainer: {
    width: 60,
    height: 60,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface CloseButtonProps {
closeModal: () => void;
};

const CloseButton = ({ closeModal }: CloseButtonProps) => {

  return (
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.closeContainer}>
        <Ionicons name="ios-close-outline" size={50} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;