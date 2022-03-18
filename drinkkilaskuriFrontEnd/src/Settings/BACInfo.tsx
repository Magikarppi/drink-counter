import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowsWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 15,
    color: colors.beige,
  },
});

class BACInfoTable extends Component {
  renderRow(datum: any) {
    return (
      <View key={datum} style={styles.rowsWrapper}>
        <View style={styles.cell}>
          <Text style={styles.text}>{datum}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{datum}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{datum}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{datum}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>{datum}</Text>
        </View>
      </View>
    );
  }

  render(): React.ReactNode {
    const data = [8, 2, 3, 4, 5];

    return (
      <View style={styles.container}>
        {data.map((datum) => {
          return this.renderRow(datum);
        })}
      </View>
    );
  }
}

export default BACInfoTable;
