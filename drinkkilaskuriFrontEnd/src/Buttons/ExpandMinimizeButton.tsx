import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../themes';
import { ExpandMinimizeBtnProps } from '../types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '10%',
    height: 30,
  },
});

const iconSize = 25;
const iconColor = colors.beige;

const ExpandMinimizeButton = ({
  statusIsExpanded,
  setStatusIsExpanded,
}: ExpandMinimizeBtnProps) => {
  let button = null;
  button = statusIsExpanded ? (
    <TouchableOpacity onPress={() => setStatusIsExpanded(false)}>
      <MaterialIcon name="expand-less" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setStatusIsExpanded(true)}>
      <MaterialIcon name="expand-more" size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );

  return <View style={styles.container}>{button}</View>;
};

export default ExpandMinimizeButton;
