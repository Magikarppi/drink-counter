import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

const BACInfo = () => {
  return (
    <View style={styles.container}>
      <Text>0.5% humala</Text>
    </View>
  );
};

export default BACInfo;
