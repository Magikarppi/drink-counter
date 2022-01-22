import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../themes';
import { CheckBoxProps } from '../types';

const styles = StyleSheet.create({});

const CheckBox = ({ handlePress, selected }: CheckBoxProps) => {
  return (
    <TouchableOpacity onPress={handlePress} >
      {selected ? <MaterialCommunityIcons name='checkbox-marked' size={30} color={colors.violet} /> : <MaterialCommunityIcons name='checkbox-blank-outline' size={30} color={colors.violet} />}
    </TouchableOpacity>
  )
};

export default CheckBox;