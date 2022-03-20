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
    flex: 2,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  percentCell: {
    flex: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: colors.violet,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCell: {
    flex: 6,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: colors.violet,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  text: {
    fontSize: 13,
    color: colors.beige,
  },
});

class BACInfoTable extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={{ ...styles.rowsWrapper, flex: 1 }}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>%</Text>
          </View>
          <View style={{ ...styles.textCell, alignItems: 'flex-start' }}>
            <Text style={styles.text}>Vaikutus</Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`> 0.25`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Estot vähenevät, itseluottamus kasvaa, lämmön ja hyvinvoinnin
              tunne, tarkkaavuus heikentyy.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`0.25 \n  – \n 0.5`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Mielihyvän tunne, kömpelyyttä, arvostelukyky heikkenee.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`0.5 \n – \n1.0`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Reaktioaika, ajokyky ja liikkeiden hallinta heikkenevät, tunteet
              ailahtelevat.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`1.0 \n  – \n2.5`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Heikkeneminen voimistuu, pahoinvointia, oksennuksia, sekavuutta.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`2.5 \n  – \n4.0`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Puhe sammaltaa, näköhäiriöitä, tajuttomuus.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`> 0.4`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Hengitys vaikeutuu, verensokeri vähenee, lämmöntuotanto heikkenee.
            </Text>
          </View>
        </View>
        <View style={styles.rowsWrapper}>
          <View style={styles.percentCell}>
            <Text style={styles.text}>{`> 0.5`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.text}>
              Keskimäärin tappava pitoisuus (pääkallo icon?)
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default BACInfoTable;
