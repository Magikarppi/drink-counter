import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../themes';
import { ExpandMinimizeBtnProps } from '../types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
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
        <MaterialCommunityIcon
          name="expand-more"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    );
  } else if (mode === 'minimize') {
    button = (
      <TouchableOpacity onPress={() => buttonPress('minimize')}>
        <MaterialCommunityIcon
          name="expand-less"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>
    );
  }

  return <View style={styles.container}>{button}</View>;
};

export default ExpandMinimizeButton;
