import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { colors } from '../themes';
import { BodySizeProps } from '../types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: '100%',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    backgroundColor: colors.violet,
    borderColor: 'black',
    borderWidth: 2,
    borderBottomColor: colors.backgroundDark,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 15,
    color: colors.beige,
  },
});

const BodySize = ({ bodyweight, setBodyweight }: BodySizeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputSection}>
        <Text style={styles.text}>Kehonpainoni on n. </Text>
        <View style={styles.input}>
          <TextInput
            style={{ color: colors.beige }}
            value={bodyweight}
            onChangeText={setBodyweight}
            keyboardType="number-pad"
            placeholderTextColor={'grey'}
            textAlign="center"
          />
        </View>
        <Text style={styles.text}>kg</Text>
      </View>
      <Text style={{ ...styles.text, fontSize: 12, color: colors.brown }}>
        Käytetään veren tarkemman alkoholipitoisuuden laskemiseen
      </Text>
    </View>
  );
};

export default BodySize;
