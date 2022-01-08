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

type ButtonProps = {
  openOrClose: (isOpen: boolean) => void;
};

const Button = ({ openOrClose }: ButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleAction = () => {
    openOrClose(isOpen);
    setIsOpen((prev) => !prev);
  }
  return (
    <TouchableWithoutFeedback onPress={handleAction}>
      <View style={styles.closeContainer}>
        {isOpen ? 
        <Ionicons name="ios-close-outline" size={50} color="black" /> : 
        <Ionicons name="ios-cog-outline" size={50} color="black" />}
        
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;