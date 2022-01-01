import React from 'react';
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

type CloseButtonProps = {
  handleClose: () => void;
};

const CloseButton = ({ handleClose }: CloseButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={handleClose}>
      <View style={styles.closeContainer}>
        {/* <AntDesign name="closecircleo" size={50} color="black" /> */}
        <Ionicons name="ios-close-outline" size={50} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CloseButton;