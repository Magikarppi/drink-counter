import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './themes';
import { MessageProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    backgroundColor: colors.beige,
    borderWidth: 1,
    borderColor: colors.violet,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    color: colors.backgroundDark,
  },
});

const Message = ({ message }: MessageProps) => {
  if (!message) {
    return <View style={{ height: styles.container.height }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Message;
