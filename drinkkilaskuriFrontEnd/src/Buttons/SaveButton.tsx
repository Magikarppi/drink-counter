import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    backgroundColor: colors.beige,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.violet
  }
});

interface SaveButtonProps {
saveSettings: () => void;
};

const SaveButton = ({ saveSettings }: SaveButtonProps) => {

  return (
    <TouchableWithoutFeedback onPress={saveSettings}>
      <View style={styles.container}>
        <Text style={styles.text}>Tallenna</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SaveButton;