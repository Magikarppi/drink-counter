/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AddDrink from './src/AddDrink';
import Drinks from './src/Drinks';
import Goals from './src/Goals';
import HeaderMain from './src/HeaderMain';
import SettingsModal from './src/Settings/SettingsModal';
import { DrinkType } from './src/types';

const styles = StyleSheet.create({
  container: {},
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 32,
    paddingHorizontal: 14,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const Section: React.FC<{
  title?: string;
}> = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [drinklist, setDrinkList] = useState<DrinkType[]>();
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAddDrink = (drink: DrinkType) => {
    if (drinklist) {
      const newDrinkList = [...drinklist, drink];
      return setDrinkList(newDrinkList);
    } else {
      return setDrinkList([drink]);
    }
  };

  const openSettings = () => {
    setShowSettings(true);
  }

  const closeSettings = () => {
    setShowSettings(false);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
          <HeaderMain openModal={openSettings}  />
          <SettingsModal showModal={showSettings} closeModal={closeSettings} />
        <Section title="Lisää juoma">
          <AddDrink addDrink={handleAddDrink} />
        </Section>
        <Section>
          <Goals drinkList={drinklist} />
        </Section>
        <Section title="Juomat">
          <Drinks drinkList={drinklist} />
        </Section>
      </View>
    </SafeAreaView>
  );
};

export default App;
