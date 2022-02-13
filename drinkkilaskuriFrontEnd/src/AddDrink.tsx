import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
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
    height: '35%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '20%',
    height: '100%',
    // backgroundColor: 'brown',
    // borderWidth: 1,
    // borderColor: 'black',
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
    borderTopColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    margin: 5,
    color: colors.beige,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.beige,
    width: 70,
    height: 40,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.violet,
  },
  titleText: {
    fontSize: 20,
    color: colors.beige,
  },
  inputText: {
    fontSize: 18,
    color: 'grey',
    shadowColor: colors.beige,
    textShadowColor: 'brown',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.violet,
  },
  smallPrintText: {
    fontSize: 10,
    color: colors.beige,
  },
});

const AddDrink = ({
  addDrink,
  openFavorites,
  favFolderIconStyle,
  openReminder,
  drinkLimitReached,
  alcPercent,
  setAlcPercent,
  amount,
  setAmount,
  drinkName,
  setDrinkName,
}: AddDrinkProps) => {
  const handleSubmit = () => {
    if (drinkLimitReached) {
      openReminder();
    } else {
      addDrink();
    }
    return;
  };

  // change , to . input

  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Lisää drinkki</Text>
          <View style={styles.sectionContainer}>
            <View style={{ ...styles.inputContainer }} />
            <View style={{ ...styles.inputContainer, width: '60%' }}>
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
                  maxLength={4}
                  enablesReturnKeyAutomatically={true}
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.inputText}>dl</Text>
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
            <View
              style={{
                ...styles.inputContainer,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <TouchableOpacity onPress={openFavorites}>
                <MaterialCommunityIcons
                  name="folder-star-outline"
                  size={favFolderIconStyle.size}
                  color={favFolderIconStyle.color}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              ...styles.inputBox,
            }}
          >
            <Text style={styles.inputText}>Nimi</Text>
            <Text style={styles.smallPrintText}>(valinnainen)</Text>
            <TextInput
              style={{
                ...styles.input,
                width: 150,
                height: 40,
              }}
              onChangeText={setDrinkName}
              value={drinkName}
              placeholder=""
              keyboardType="default"
              placeholderTextColor={'grey'}
              textAlign="center"
              enablesReturnKeyAutomatically={true}
              maxLength={15}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Lisää</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddDrink;
