import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { GoalsProps } from './types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Goals = ({ drinkList }: GoalsProps) => {
  const [drinkCountLimit, setDrinkCountLimit] = useState<number>(5);

  return (
    <View style={styles.container}>
      <View>
        <Text>{`${drinkList?.length} / ${drinkCountLimit}`}</Text>
      </View>
    </View>
  );
};

export default Goals;
