import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SettingsButton from './Buttons/SettingsButton';
import { colors } from './themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.beige,
    flexDirection: 'row',
    // flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    borderBottomColor: 'dark-grey',
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  titleContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.violet,
    fontSize: 30,
    textShadowColor: colors.brown,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

interface HeaderProps {
  openModal: () => void;
}

const MainHeader = ({ openModal }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sideContainer} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>MaxiNapsu</Text>
      </View>
      <View style={styles.sideContainer}>
        <SettingsButton openModal={openModal} />
      </View>
    </View>
  );
};

export default MainHeader;
