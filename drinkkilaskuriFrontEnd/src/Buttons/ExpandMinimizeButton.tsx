import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../themes';
import { ExpandMinimizeBtnProps } from '../types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'cyan',
  },
});

const iconSize = 25;
const iconColor = colors.beige;

const ExpandMinimizeButton = ({
  mode,
  buttonPress,
}: ExpandMinimizeBtnProps) => {
  let button = null;
  if (mode === 'expand') {
    button = (
      <TouchableOpacity onPress={() => buttonPress('expand')}>
        <MaterialIcon name="expand-more" size={iconSize} color={iconColor} />
      </TouchableOpacity>
    );
  } else if (mode === 'minimize') {
    button = (
      <TouchableOpacity onPress={() => buttonPress('minimize')}>
        <MaterialIcon name="expand-less" size={iconSize} color={iconColor} />
      </TouchableOpacity>
    );
  }

  return <View style={styles.container}>{button}</View>;
};

export default ExpandMinimizeButton;
