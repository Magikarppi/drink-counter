import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from './themes';
import { AddDrinkProps } from './types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '50%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '15%',
    height: '100%',
    // padding: 20,
    // marginHorizontal: 20,
  },
  inputBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '20%'
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
    margin: 5,
    color: colors.white,
  },
  inputText: {
    fontSize: 18,
    color: 'black',
    shadowColor: 'grey',
    textShadowColor: 'grey',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  titleText: {
    fontSize: 18,
    color: colors.white,
  },
});

const AddDrink = ({ addDrink, openFavorites }: AddDrinkProps) => {
  const [alcPercent, setAlcPercent] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [drinkName, setDrinkName] = useState<string>();

  const handleSubmit = () => {
    if (alcPercent && amount) {
      const alcPercentTrimmed = parseFloat(alcPercent.replace(',', '.'));
      const amountTrimmed = parseFloat(amount.replace(',', '.'));
      addDrink(alcPercentTrimmed, amountTrimmed);
      // const drink: DrinkType = {
      //   alcPercent: parseFloat(alcPercent.replace(',', '.')),
      //   amount: parseFloat(amount.replace(',', '.')),
      //   timeConsumed: new Date(),
      //   id: randomId()
      // };
      // addDrink(drink);
    }
    return;
  };

  // change , to . input

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Lisää drinkki</Text>
      <View style={styles.sectionContainer}>
        <View style={{ ...styles.inputContainer }} />
        <View style={{ ...styles.inputContainer, width: '90%' }}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Nimi</Text>
            <TextInput
              style={{ ...styles.input, width: 100 }}
              onChangeText={setDrinkName}
              value={drinkName}
              placeholder="4.7"
              keyboardType="default"
              placeholderTextColor={'grey'}
              textAlign="center"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>%</Text>
            <TextInput
              style={styles.input}
              onChangeText={setAlcPercent}
              value={alcPercent}
              placeholder="4.7"
              keyboardType="decimal-pad"
              placeholderTextColor={'grey'}
              textAlign="center"
              enablesReturnKeyAutomatically={true}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>cl</Text>
            <TextInput
              style={styles.input}
              onChangeText={setAmount}
              value={amount}
              placeholder="0.33"
              keyboardType="decimal-pad"
              textAlign="center"
              placeholderTextColor={'grey'}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="dark"
              maxLength={4}
            />
          </View>
        </View>
        <View style={{ ...styles.inputContainer, alignItems: 'center' }}>
          <TouchableOpacity onPress={openFavorites}>
            <MaterialCommunityIcons
              name="folder-star-outline"
              size={50}
              color={colors.beige}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Lisää" onPress={handleSubmit} color={colors.violet} />
      </View>
    </View>
  );
};

export default AddDrink;
