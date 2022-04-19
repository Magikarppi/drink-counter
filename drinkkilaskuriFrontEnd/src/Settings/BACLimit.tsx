import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { colors } from '../themes';
import { BACLimitProps } from '../types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  elementWrapper: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bacElementWrapper: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
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
  },
  text: {
    fontSize: 15,
    color: colors.beige,
    textAlign: 'center',
  },
  percentText: {
    fontSize: 17,
    color: colors.beige,
    textAlign: 'center',
  },
});

const BACLimit = ({ bacLimit, setBACLimit }: BACLimitProps) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.elementWrapper, alignItems: 'flex-end' }}>
        <Text style={styles.text}>Aseta raja</Text>
      </View>
      <View style={styles.elementWrapper}>
        <View style={styles.input}>
          <TextInput
            style={{ color: colors.beige }}
            value={bacLimit}
            onChangeText={setBACLimit}
            placeholder="0.5"
            keyboardType="number-pad"
            placeholderTextColor={'grey'}
            textAlign="center"
            maxLength={4}
          />
        </View>
      </View>
      <View style={styles.bacElementWrapper}>
        <View style={{ margin: 1 }}>
          <Text style={styles.text}>‰ (promillea)</Text>
        </View>
        {/* <View style={{ margin: 1 }}>
          <Ionicon name="body-outline" size={20} color={colors.beige} />
        </View> */}
      </View>
    </View>
  );
};

export default BACLimit;
