import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../themes';

const styles = StyleSheet.create({
  closeContainer: {
    width: 60,
    height: 60,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface SettingsButtonProps {
  openModal: () => void;
}

const SettingsButton = ({ openModal }: SettingsButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={openModal}>
      <View style={styles.closeContainer}>
        <Ionicons
          name="settings-outline"
          size={30}
          color={colors.backgroundDark}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SettingsButton;
