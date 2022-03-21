import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

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
  // percentText: {
  //   fontSize: 15,
  //   color: colors.beige,
  // },
  infoText: {
    fontSize: 13,
    color: '#0e0505',
    textShadowColor: colors.violet,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  // lightText: {
  //   fontSize: 13,
  //   color: colors.beige,
  //   textShadowColor: 'black',
  //   textShadowOffset: { width: 1, height: 1 },
  //   textShadowRadius: 1,
  // },
  titleText: {
    color: colors.violet,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

class BACInfoTable extends Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View
          style={{
            ...styles.rowsWrapper,
            flex: 1,
            backgroundColor: colors.beige,
          }}
        >
          <View style={styles.percentCell}>
            <Text style={styles.titleText}>%</Text>
          </View>
          <View
            style={{
              ...styles.textCell,
              alignItems: 'flex-start',
            }}
          >
            <Text style={styles.titleText}>Vaikutus</Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: '#25df00' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`> 0.25`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Estot vähenevät, itseluottamus kasvaa, lämmön ja hyvinvoinnin
              tunne, tarkkaavuus heikentyy.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: '#408500' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`0.25 \n  – \n 0.5`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Mielihyvän tunne, kömpelyyttä, arvostelukyky heikkenee.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: 'yellow' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`0.5 \n – \n1.0`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Reaktioaika, ajokyky ja liikkeiden hallinta heikkenevät, tunteet
              ailahtelevat.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: '#dd7f03' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`1.0 \n  – \n2.5`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Heikkeneminen voimistuu, pahoinvointia, oksennuksia, sekavuutta.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: colors.danger }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`2.5 \n  – \n4.0`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Puhe sammaltaa, näköhäiriöitä, tajuttomuus.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: '#a10000' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`> 4.0`}</Text>
          </View>
          <View style={styles.textCell}>
            <Text style={styles.infoText}>
              Hengitys vaikeutuu, verensokeri vähenee, lämmöntuotanto heikkenee.
            </Text>
          </View>
        </View>
        <View style={{ ...styles.rowsWrapper, backgroundColor: '#0e0505' }}>
          <View style={styles.percentCell}>
            <Text style={styles.infoText}>{`> 5.0`}</Text>
          </View>
          <View
            style={{
              ...styles.textCell,
              alignItems: 'center',
            }}
          >
            <Ionicon name="skull" color={colors.backgroundDark} size={35} />
          </View>
        </View>
      </View>
    );
  }
}

export default BACInfoTable;
