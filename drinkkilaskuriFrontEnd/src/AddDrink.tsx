import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';
import { colors } from './themes';
import { AddDrinkProps, DrinkType } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderColor: colors.beige,
    borderWidth: 2,
    margin: 5
  },
  inputText: {
    fontSize: 18,
    color: 'black',
    shadowColor: 'grey',
    textShadowColor: 'grey',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
});

const AddDrink = ({ addDrink }: AddDrinkProps) => {
  const [alcPercent, setAlcPercent] = useState<string>();
  const [amount, setAmount] = useState<string>();

  const handleSubmit = () => {
    if (alcPercent && amount) {
      const drink: DrinkType = {
        alcPercent: parseFloat(alcPercent.replace(',', '.')),
        amount: parseFloat(amount.replace(',', '.')),
        timeConsumed: new Date(),
      };
      addDrink(drink);
    }
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>%</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAlcPercent}
          value={alcPercent}
          placeholder="4.7"
          keyboardType="decimal-pad"
          placeholderTextColor={'grey'}
          textAlign="center"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>cl</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={amount}
          placeholder="0.33"
          keyboardType="decimal-pad"
          textAlign="center"
          placeholderTextColor={'grey'}

        />
      </View>
      <View style={styles.buttonContainer}><Button title="+" onPress={handleSubmit} /></View>
    </View>
  );
};

export default AddDrink;
