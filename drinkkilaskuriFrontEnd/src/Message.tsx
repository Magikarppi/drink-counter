import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './themes';
import { MessageProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: colors.beige
  },
  text: {
    fontSize: 15,
    color: colors.backgroundDark
  }
});

const Message = ({ message }: MessageProps) => {
  if (!message) return <View style={{ ...styles.container, backgroundColor: undefined }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
};

export default Message;