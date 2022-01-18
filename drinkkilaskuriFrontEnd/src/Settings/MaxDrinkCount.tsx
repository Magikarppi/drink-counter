import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { colors } from '../themes';

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: colors.beige,
    borderWidth: 2,
    margin: 5,
  },
});

const MaxDrinkCount = () => {
  const [drinkCount, setDrinkCount] = useState<string>();

  return (
    <View style={styles.input}>
      <TextInput value={drinkCount} onChangeText={setDrinkCount} placeholder='4' keyboardType='number-pad' placeholderTextColor={'grey'} textAlign='center' />
    </View>
  )
};

export default MaxDrinkCount;